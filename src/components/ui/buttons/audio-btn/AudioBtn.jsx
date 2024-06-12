import { useEffect, useState } from 'react';
import { CirclePlay, CirclePause } from 'lucide-react';

import styles from './AudioBtn.module.scss';

// eslint-disable-next-line react/prop-types
export function AudioBtn({ audio }) {
	const [audioAction, setAudioAction] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react/prop-types
		audioAction ? audio.play() : audio.pause();
	}, [audioAction]);

	return (
		<button
			className={styles.button}
			type='button'
			onClick={() => setAudioAction((prev) => !prev)}
		>
			{
				audioAction ? <CirclePause size={30} /> : <CirclePlay size={30} />
			}
		</button>
	);
}