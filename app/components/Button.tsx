'use client';

import type { IconType } from 'react-icons';

type ButtonProps = {
	label: string;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ label, disabled, outline, small, icon: Icon, onClick }: ButtonProps) {
	return (
		<button
			className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
				outline ? 'bg-white border-black text-black' : 'bg-rose-500 border-rose-500 text-white'
			} ${small ? 'py-1 text-sm font-light border' : 'py-3 text-base font-semibold border-2'}`}
			onClick={onClick}
			disabled={disabled}
		>
			{Icon && <Icon size={24} className="absolute top-3 left-4" />} {label}
		</button>
	);
}

export default Button;
