import PublicUrl from '../../../../config/public-url.config.js';

import { Title } from '@/components/ui/title/Title.jsx';
import { AudioBtn } from '@/components/ui/buttons/audio-btn/AudioBtn.jsx';

import styles from './Info.module.scss';

const audioBg = new Audio(PublicUrl.getAudio(`/${import.meta.env.VITE_AUDIO_BG}`));
audioBg.loop = true;

export function Info() {
	return (
		<div className={styles.info}>
			<Title value='GTA VI' />
			<p className={styles.text}>
				При отправки заявки, вы встаёте в очередь.
				На получение за три месяца до официального релиза
				полную игру Grand Theft Auto 6.
			</p>
			<div className={styles.bottom}>
				<p className={styles.feed}>Подать заявку</p>
				<AudioBtn audio={audioBg} />
			</div>
		</div>
	);
}