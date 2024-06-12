import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useHookForm from './useForm.js';
import PublicUrl from '@/config/public-url.config.js';

import { Field } from '@/components/ui/form/field/Field.jsx';
import { Button } from '@/components/ui/buttons/button/Button.jsx';

const validateErrorAudio = new Audio(PublicUrl.getAudio(`/${import.meta.env.VITE_AUDIO_VALIDATE_ERROR}`));

export function Form() {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: {
			errors
		}
	} = useForm({ mode: 'onChange' });

	useEffect(() => {
		Object.keys(errors).length > 1 && validateErrorAudio.play();
	}, [Object.keys(errors)]);

	const { mutate, isPending } = useHookForm(reset, setError);

	const onSubmit = (data) => {
		mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Field
				type='text'
				placeholder='Имя'
				error={errors.name}
				{...register('name', {
					required: true,
					maxLength: 50
				})}
			/>
			<Field
				type='email'
				placeholder='Email'
				error={errors.email}
				{...register('email', {
					required: true,
					pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
				})}
			/>
			<Button className='mt-5' type='submit' value='Отправить' isLoading={isPending} />
		</form>
	);
}