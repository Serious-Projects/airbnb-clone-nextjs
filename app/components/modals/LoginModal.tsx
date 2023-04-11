'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Modal from '.';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';

function LoginModal() {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: { email: '', password: '' },
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		signIn('credentials', { ...data, redirect: false }).then((cb) => {
			setIsLoading(false);
			if (cb?.ok) {
				toast.success('Logged In');
				router.refresh();
				loginModal.onClose();
			}
			if (cb?.error) {
				toast.error(cb.error);
			}
		});
	};

	const toggle = useCallback(() => {
		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal]);

	return (
		<Modal
			title="Login"
			actionLabel="Continue"
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			body={
				<>
					<div className="flex flex-col gap-4">
						<Heading title="Welcome back!" subtitle="Login to your account!" />
						<Input
							id="email"
							label="Email"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
						<Input
							type="password"
							id="password"
							label="Password"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>
					</div>
				</>
			}
			footer={
				<>
					<div className="flex flex-col gap-4 mt-3">
						<hr />
						<Button
							label="Continue with Google"
							icon={FcGoogle}
							onClick={() => signIn('google')}
							outline
						/>
						<Button
							label="Continue with Github"
							icon={AiFillGithub}
							onClick={() => signIn('github')}
							outline
						/>
						<div className="mt-4 font-light text-center text-neutral-500">
							<div className="flex flex-row items-center justify-center gap-2">
								<div>Using Airbnb for the very first time?</div>
								<div
									className="cursor-pointer text-neutral-800 hover:underline"
									onClick={toggle}
								>
									Create an account
								</div>
							</div>
						</div>
					</div>
				</>
			}
		/>
	);
}

export default LoginModal;
