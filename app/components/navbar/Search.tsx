'use client';

import { BiSearch } from 'react-icons/bi';

function Search() {
	return (
		<div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
			<div className="flex flex-row items-center justify-between">
				<div className="px-6 text-sm font-semibold">Anywhere</div>
				<div className="hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center">
					Any week
				</div>
				<div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
					<div className="hidden sm:block">Add Guests</div>
					<div className="p-2 bg-rose-500 text-white rounded-full">
						<BiSearch />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
