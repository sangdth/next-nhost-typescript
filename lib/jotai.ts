import { atom } from 'jotai';
import type { UserType } from './types';

export const meAtom = atom<UserType | null>(null);
