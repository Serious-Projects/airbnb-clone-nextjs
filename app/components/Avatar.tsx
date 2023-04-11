'use client';

import Image from 'next/image';

type AvatarProps = {
	src: string | null | undefined;
};

function Avatar({ src }: AvatarProps) {
	return (
		<Image
			src={src ?? '/images/placeholder.jpg'}
			alt="avatar"
			className="rounded-full"
			height={30}
			width={30}
		/>
	);
}

export default Avatar;
