'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import LoginModal from './login/LoginModal';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const sidebarRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				sidebarRef.current &&
				(sidebarRef.current as HTMLElement).contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		// Bind the event listener
		document.addEventListener('click', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('click', handleClickOutside);
		};
	}, [sidebarRef, setIsOpen]);

	const Menu = [
		{
			id: 1,
			name: 'Home',
			path: '/',
		},
		{
			id: 2,
			name: 'Feature',
			path: '/feature',
		},
		{
			id: 3,
			name: 'Pricing',
			path: '/pricing',
		},
		{
			id: 4,
			name: 'About',
			path: '/about',
		},
	];

	const sidebarStyle = {
		position: 'fixed',
		top: 0,
		left: isOpen ? 0 : '-100%',
		width: '10%',
		height: '100vh',
		background: '#414245',
		transition: 'right 0.3s ease-in-out',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: '0 10px 10px 0',
		padding: '10px',
		zIndex: 1000,
	};
	const closeIconStyle = {
		position: 'absolute',
		top: '10px',
		left: '10px',
		cursor: 'pointer',
	};

	return (
		<header>
			<nav>
				<div className="flex items-center justify-between p-4 shadow-sm bg-neutral-800">
					<div className="flex items-center gap-14 w-full">
						<button onClick={() => setIsOpen(!isOpen)}>
							<Image
								src="/logo-bisnis.png"
								alt="logo"
								width={180}
								height={80}
							/>
						</button>
						{/* <Image src="/logo-bisnis.png" alt="logo" width={180} height={80} /> */}
						<ul className="md:flex gap-20 hidden">
							{Menu.map((item, index) => (
								<Link href={item.path} key={index}>
									<li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
										{item.name}
									</li>
								</Link>
							))}
						</ul>
					</div>
					<div className="flex items-center"></div>
					<LoginModal />
				</div>
			</nav>
			{isOpen && (
				<div style={sidebarStyle} ref={sidebarRef}>
					<div style={closeIconStyle} onClick={() => setIsOpen(false)}>
						{/* Replace this with your hamburger icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>
					<ul>
						{Menu.map((item, index) => (
							<Link href={item.path} key={index}>
								<li
									className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out ml-10 my-12 mt-16"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</li>
							</Link>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
