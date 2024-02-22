const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
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
		],
		skipDuplicates: true, // Skip 'Bobo'
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
