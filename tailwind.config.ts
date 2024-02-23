import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			navybig: '#0F1A59',
			bluebig: '#3652AD',
			whitebig: '#E9F6FF',
			orangebig: '#FE7A36',
		},
	},
	plugins: [require('daisyui')],
};
export default config;
