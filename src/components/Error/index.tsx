import { FC, useEffect, useState } from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

const Error: FC = () => {
	const error = useRouteError();

	const [errorData, setErrorData] = useState<{
		status: number;
		statusText: string;
	}>();

	useEffect(() => {
		if (isRouteErrorResponse(error)) {
			setErrorData(error);
		}
	}, [error]);

	return (
		<div className='grid h-screen w-screen place-content-center gap-2 p-3'>
			<h1 className='text-error m-0 grid place-content-center text-center font-mono text-6xl lg:text-9xl'>
				{errorData?.status ?? 'Oops!'}
			</h1>
			<div className='card card-compact bg-error-content mx-auto shadow-lg'>
				<div className='card-body !px-8'>
					<p className='text-error font-semibold'>An {errorData?.statusText ?? 'Unknown'} error occurred</p>
				</div>
			</div>

			<Link to='/' className='link link-hover mx-auto text-center font-semibold'>
				Back To Home
			</Link>
		</div>
	);
};

export default Error;
