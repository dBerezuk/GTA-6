import styles from './Title.module.scss';

export function Title({ value }) {
	return <h1 className={styles.title}>{value}</h1>;
}