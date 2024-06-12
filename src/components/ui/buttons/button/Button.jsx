import clsx from 'clsx';

import { Loader } from '@/components/ui/loader/Loader.jsx';

import styles from './Button.module.scss';

export function Button({ className, type, value, isLoading, ...rest }) {
	return (
		<button className={clsx(className, styles.button)} type={type} disabled={isLoading} {...rest}>
			{isLoading ? <Loader /> : value}
		</button>
	);
}