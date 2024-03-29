'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import LoginModal from './login/LoginModal';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	// ref for the sidebar
	const sidebarRef = useRef(null);

	// Use an effect to add an event listener for clicks outside the sidebar
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

	// Define the menu items
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

	// style for the sidebar and close icon
	const sidebarStyle = {
		position: 'fixed',
		top: 0,
		left: isOpen ? 0 : '-100%',
		width: '10%',
		height: '100vh',
		background: '#E9F6FF',
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
				{/* Header background */}
				<div className="flex items-center justify-between p-4 shadow-sm bg-whitebig">
					<div className="flex items-center gap-14 w-full">
						{/* Bisnis.com Logo */}
						<button onClick={() => setIsOpen(!isOpen)}>
							<Image
								src="/logo-bisnis.png"
								alt="logo"
								width={180}
								height={80}
							/>
						</button>

						{/* Menu  (start) */}
						<ul className="md:flex gap-20 hidden">
							{Menu.map((item, index) => (
								<Link href={item.path} key={index}>
									<li className="hover:text-bluebig cursor-pointer hover:scale-105 transition-all ease-in-out text-navybig font-bold">
										{item.name}
									</li>
								</Link>
							))}
						</ul>
						{/* Menu  (end) */}
					</div>
					{/* Login button */}
					<div className="flex items-center"></div>
					<LoginModal />
				</div>
			</nav>
			{/* Sidebar start */}
			{isOpen && (
				<div style={sidebarStyle} ref={sidebarRef}>
					<div style={closeIconStyle} onClick={() => setIsOpen(false)}>
						{/* the bars icon to close the sidebar (start) */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 text-navybig"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>
					{/* the bars icon to close the sidebar (end) */}

					{/* Menu items */}
					<ul>
						{Menu.map((item, index) => (
							<Link href={item.path} key={index}>
								<li
									className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out ml-10 my-12 mt-16 text-navybig font-bold"
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
