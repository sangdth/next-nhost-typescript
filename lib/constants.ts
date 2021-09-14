export const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql';
export const BASE_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || 'http://localhost:9001';
export const STORAGE_ENDPOINT = `${BASE_ENDPOINT}/storage`;
export const IS_DEV = process.env.NODE_ENV === 'development';
export const APP_NAME = 'My App';
export const APP_DESCRIPTION = 'Change this in /lib/constants.ts';
