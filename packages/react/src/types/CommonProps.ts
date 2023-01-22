import type { ReactNode } from 'react';

export type CommonProps<T extends any = unknown> = T & {
  className?: string;
  children: ReactNode;
}