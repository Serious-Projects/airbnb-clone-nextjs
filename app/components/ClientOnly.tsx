'use client';

import { useEffect, useState, type PropsWithChildren } from 'react';

type ClientOnlyProps = PropsWithChildren<{}>;

function ClientOnly({ children }: ClientOnlyProps) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <>{children}</>;
}

export default ClientOnly;
