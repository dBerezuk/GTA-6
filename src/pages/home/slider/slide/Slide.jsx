import PublicUrl from '@/config/public-url.config.js';

// eslint-disable-next-line react/prop-types
export function Slide({ data: { imageWebp, imageWebpX2, imageAvif, imageAvifX2, imageJpg, imageJpgX2, alt } }) {
	//<img className='w-full h-full object-cover' src={PublicUrl.getImage(`/sliders-bg/${imageJpg}`)} alt={alt} />;
	return (
		<picture>
			<source type='image/avif'
							srcSet={`${PublicUrl.getImage(`/sliders-bg/${imageAvif}`)} 1x, ${PublicUrl.getImage(`/sliders-bg/${imageAvifX2}`)} 2x`} />
			<source type='image/webp'
							srcSet={`${PublicUrl.getImage(`/sliders-bg/${imageWebp}`)} 1x, ${PublicUrl.getImage(`/sliders-bg/${imageWebpX2}`)} 2x`} />
			<img
				className='w-full h-full object-cover'
				loading='lazy'
				srcSet={PublicUrl.getImage(`/sliders-bg/${imageJpgX2}`)}
				src={PublicUrl.getImage(`/sliders-bg/${imageJpg}`)}
				alt={alt}
			/>
		</picture>
	);
}