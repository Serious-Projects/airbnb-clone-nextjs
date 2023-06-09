'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

type CategoryBoxProps = {
	label: string;
	icon: IconType;
	selected?: boolean;
};

function CategoryBox({ label, icon: Icon, selected }: CategoryBoxProps) {
	const router = useRouter();
	const params = useSearchParams();

	const handleClick = useCallback(() => {
		let currentQuery = {};
		if (params) {
			currentQuery = qs.parse(params.toString());
		}
		const updatedQuery: any = { ...currentQuery, category: label };
		if (params?.get('category') === 'label') {
			delete updatedQuery.category;
		}
		const url = qs.stringifyUrl({ url: '/', query: updatedQuery }, { skipNull: true });
		router.push(url);
	}, [label, params, router]);

	return (
		<div
			className={`flex flex-col items-center justify-center gap-2 p-3 transition border-b-2 cursor-pointer hover:text-neutral-800 ${
				selected
					? 'border-b-neutral-800 text-neutral-800'
					: 'border-transparent text-neutral-500'
			}`}
			onClick={handleClick}
		>
			<Icon size={26} />
			<div className="text-sm font-medium">{label}</div>
		</div>
	);
}

export default CategoryBox;
