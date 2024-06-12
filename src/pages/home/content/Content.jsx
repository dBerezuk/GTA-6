import { useContent } from './useContent.js';

import { Start } from '../../../components/ui/start/Start.jsx';
import { Info } from './info/Info.jsx';
import { Form } from './form/Form.jsx';

import styles from './Content.module.scss';

export function Content() {
	const { data } = useContent();
	const countArr = String(data?.count || '0').substring(0, 6).split('');

	return (
		<section className='app-container relative'>
			<div className={styles.content}>
				<div className={styles.starts}>
					{
						countArr.map((char, index) => <Start key={index} count={index < 5 ? char : '+'} />)
					}
				</div>
				<div className={styles.box}>
					<Info />
					<Form />
				</div>
			</div>
		</section>
	);
}