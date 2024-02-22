const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// asynchronous function to create users
async function createUser() {
	await prisma.user.createMany({
		data: [
			{
				createdAt: new Date(),
				updatedAt: new Date(),
				name: 'Bob',
				firtName: 'Bobo',
				lastName: 'Bobo',
				email: 'bobo@gmail.com',
				password: bcrypt.hashSync('123456'),
				isAdmin: false,
			},
			{
				createdAt: new Date(),
				updatedAt: new Date(),
				name: 'Alice',
				firtName: 'Alice',
				lastName: 'Bordeland',
				email: 'alice@gmail.com',
				password: bcrypt.hashSync('123456'),
				isAdmin: false,
			},
			{
				createdAt: new Date(),
				updatedAt: new Date(),
				name: 'Joko',
				firtName: 'Admin',
				lastName: 'Admin',
				email: '',
				password: bcrypt.hashSync('123456'),
				isAdmin: false,
			},
		],
		skipDuplicates: true, // Skip 'Bobo'
	});
}

// asynchronous function to create products
async function createProduct() {
	await prisma.product.createMany({
		data: [
			{
				createdAt: new Date(),
				updatedAt: new Date(),
				name: 'Waterproof Jacket',
				slug: 'waterproof-jacket',
				category: 'Jakcet',
				image: '/images/shirt3.jpg',
				price: 88,
				brand: 'Apple',
				rating: 4.8,
				countInStock: 20,
				description:
					'High quality product with waterproof material and comfortable to wear in any weather condition and any time of the day and night and any occasion. It is a unisex product.',
				isFeatured: false,
				banner: null,
			},
		],
		skipDuplicates: true, // Skip 'Bobo'
	});
}

async function main() {
	await createUser();
	await createProduct()
		.then(async () => {
			await prisma.$disconnect();
		})
		.catch(async (e) => {
			console.error(e);
			await prisma.$disconnect();
			process.exit(1);
		});
}
