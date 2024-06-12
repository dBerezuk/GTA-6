import { Keyboard, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderSlides } from '@/data/slider-slides.data.js';

import { Slide } from './slide/Slide.jsx';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function Slider() {
	return (
		<Swiper
			className='absolute top-0 left-0 right-0 bottom-0 animate-scale'
			slidesPerView={1}
			speed={650}
			autoplay={true}
			keyboard={true}
			grabCursor={true}
			effect='fade'
			modules={[Keyboard, EffectFade, Autoplay]}
		>
			{
				SliderSlides.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<Slide data={item} />
						</SwiperSlide>
					);
				})
			}
		</Swiper>
	);
}