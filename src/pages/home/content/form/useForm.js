import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import RequestService from '@/services/request.service.js';

function useForm(reset, setError) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['create.feed'],
		mutationFn: (data) => RequestService.createFeed(data),
		onSuccess: ({ data }) => {
			toast.success(data.msg);
			reset();

			queryClient.prefetchQuery({ queryKey: ['count.feeds'] });
		},
		onError: ({ response: { data } }) => {
			toast.error(data.error || data.form_error[0].msg);

			data.form_error?.forEach(({ path, type }) => {
				setError(path, { type });
			});
		}
	});
}

export default useForm;