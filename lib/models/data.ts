// note: not using this file anymore

import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'John',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			name: 'Jane',
			email: 'user@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
	],
	products: [
		{
			name: 'Free Shirt',
			slug: 'free-shirt',
			category: 'Shirts',
			image: '/images/adele-30.jpeg',
			price: 70,
			brand: 'Nike',
			rating: 4.5,
			countInStock: 20,
			description: 'A popular shirt',
			isFeatured: true,
			banner: '/images/banner1.jpg',
		},
		{
			name: 'Fit Shirt',
			slug: 'fit-shirt',
			category: 'Shirts',
			image: '/images/fourtwnty-lelaku.jpg',
			price: 80,
			brand: 'Adidas',
			rating: 3.2,
			countInStock: 20,
			description: 'A popular shirt',
			isFeatured: true,
			banner: '/images/banner2.jpg',
		},
		{
			name: 'Slim Shirt',
			slug: 'slim-shirt',
			category: 'Shirts',
			image: '/images/manusia-tulus.jpg',
			price: 90,
			brand: 'Raymond',
			rating: 4.5,
			countInStock: 20,
			description:
				'A popular shirt with a slim fit style and a classic collar design for a modern look and feel. Made with 100% cotton. Available in a variety of colors and sizes. Machine washable.',
		},
		{
			name: 'Golf Pants',
			slug: 'golf-pants',
			category: 'Pants',
			image: '/images/arcticmonkeys-fwn.jpg',
			price: 90,
			brand: 'Oliver',
			rating: 2.9,
			countInStock: 20,
			description: 'Smart looking pants',
		},
		{
			name: 'Fit Pants',
			slug: 'fit-pants',
			category: 'Pants',
			image: '/images/mantra-mantra-kuntoaji.jpg',
			price: 95,
			brand: 'Zara',
			rating: 3.5,
			countInStock: 20,
			description: 'A popular pants',
		},
		{
			name: 'Classic Pants',
			slug: 'classic-pants',
			category: 'Pants',
			image: '/images/riuh-febyputri.jpeg',
			price: 75,
			brand: 'Casely',
			rating: 2.4,
			countInStock: 20,
			description: 'A popular pants',
		},
	],
};

export default data;
