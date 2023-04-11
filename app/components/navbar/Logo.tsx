'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Logo() {
	const router = useRouter();

	return (
		<Image
			src="/images/logo.png"
			className="hidden cursor-pointer md:block"
			width={100}
			height={100}
			alt="Logo"
			onClick={() => router.push('/')}
		/>
	);
}

export default Logo;
