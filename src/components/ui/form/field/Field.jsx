import { forwardRef } from 'react';

import styles from './Field.module.scss';
import clsx from 'clsx';

export const Field = forwardRef(function({ type, placeholder, error, ...rest }, ref) {
	return (
		<div className={clsx(styles.field, error && styles.field__error)}>
			<input className={styles.input} type={type} placeholder={placeholder} {...rest} ref={ref} autoComplete='off' />
		</div>
	);
});