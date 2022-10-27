import { MouseEventHandler, useCallback, useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export const useServiceWorker = () => {
	const {
		offlineReady: [offlineReady, setOfflineReady],
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegistered: result => console.log(`SW Registered: ${result}`),
		onRegisterError: error => console.log('SW registration error', error),
	});

	const onClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
		setOfflineReady(false);
		setNeedRefresh(false);
		// hideCommonNoti('SERVICE_WORKER_PROMPT');
	}, [setNeedRefresh, setOfflineReady]);

	const onRefresh: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
		updateServiceWorker(true);
		// hideCommonNoti('SERVICE_WORKER_PROMPT');
	}, [updateServiceWorker]);

	useEffect(() => {
		if (offlineReady || needRefresh) {
			// showCommonNoti({
			// 	id: 'SERVICE_WORKER_PROMPT',
			// 	color: 'grape',
			// 	disallowClose: true,
			// 	message: ReloadPrompt({
			// 		needRefresh,
			// 		message: offlineReady
			// 			? 'App ready to work offline'
			// 			: 'New content available, click on reload button to update.',
			// 		onClose,
			// 		onRefresh,
			// 	}),
			// });
		} else {
			// hideCommonNoti('SERVICE_WORKER_PROMPT');
		}
	}, [offlineReady, needRefresh, onClose, onRefresh]);
};
