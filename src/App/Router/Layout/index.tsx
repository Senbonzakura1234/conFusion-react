import { type FC } from 'react';

import type { CommonProps } from '@typescript/common/props';

const Layout: FC<CommonProps> = ({ children }) => {
	return (
		<div className='grid-rows-layoutMobile lg:grid-rows-layoutDesktop bg-base-100 grid h-screen w-screen lg:gap-2'>
			{children}
		</div>
	);
};

export default Layout;
