import Header from '@/components/header/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bisnis.com',
	description:
		'Bisnis.com adalah situs berita bisnis, investasi, finansial, ekonomi, dan politik dari Indonesia dan dunia.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col bg-bluebig">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
