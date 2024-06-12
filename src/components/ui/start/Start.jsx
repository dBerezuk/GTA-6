import styles from './Start.module.scss';

// eslint-disable-next-line react/prop-types
export function Start({ count }) {
	return <div className={styles.start}>{count}</div>;
}