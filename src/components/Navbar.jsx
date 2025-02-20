/** @format */

import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container'>
				<a href='/'>
					<img src={headerLogo} alt='logo' width='130' height='29' />
				</a>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='font-montserrat leading-normal text-lg text-slate-gray hoverUnderline dark:mix-blend-difference'>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<ThemeSwitch />
				<div className='md:hidden lg:hidden max-lg:block dark:invert'>
					<img src={hamburger} alt='hamburger' height='25' width='25' />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
