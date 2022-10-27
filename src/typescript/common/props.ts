import type { ReactNode } from 'react';

export type CommonProps<T = unknown> = {
	children?: ReactNode | ReactNode[];
} & T;
