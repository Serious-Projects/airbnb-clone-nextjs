'use client';

import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{}>;

function Container({ children }: ContainerProps) {
	return <div className="max-w-[2530px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</div>;
}

export default Container;
