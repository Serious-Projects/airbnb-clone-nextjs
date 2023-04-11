'use client';

import { SafeUser } from '@/app/types';
import Container from '../Container';
import Categories from './Categories';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

type NavbarProps = {
	currentUser?: SafeUser | null;
};

function Navbar({ currentUser }: NavbarProps) {
	return (
		<nav className="fixed z-10 w-full bg-white shadow-sm">
			<div className="py-4 border-b">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Categories />
		</nav>
	);
}

export default Navbar;
