import { useQuery } from '@tanstack/react-query';

import RequestService from '@/services/request.service.js';

export function useContent() {
	return useQuery({
		queryKey: ['count.feeds'],
		queryFn: () => RequestService.countFeeds(),
		select: ({ data }) => data
	});
}