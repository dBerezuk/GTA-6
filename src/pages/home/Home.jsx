import { Slider } from './slider/Slider.jsx';
import { Content } from './content/Content.jsx';

export function Home() {
	return (
		<div className='relative min-h-dvh flex overflow-hidden'>
			<Slider />
			<Content />
		</div>
	);
}