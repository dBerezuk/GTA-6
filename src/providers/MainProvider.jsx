import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			keepPreviousData: true,
			refetchOnWindowFocus: false
		}
	}
});

// eslint-disable-next-line react/prop-types
export function MainProvider({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster />
		</QueryClientProvider>
	);
}