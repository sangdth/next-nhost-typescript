import deepmerge from 'deepmerge';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const defaultSettings = {
  showSpinner: false,
};

export const useLoadingProgress = (settings = {}) => {
  const router = useRouter();

  const finalSettings = deepmerge(defaultSettings, settings);
  NProgress.configure(finalSettings);

  useEffect(() => {
    const handleStart = () => {
      // console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
};
