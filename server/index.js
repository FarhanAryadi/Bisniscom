const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(cors());

app.get('/api/products', async (req, res) => {
	try {
		const products = await prisma.product.findMany({
			orderBy: {
				createdAt: 'desc',
			},
			take: 10, // get the latest 10 products
		});
		res.json(products);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// get all users
app.get('/api/users', async (req, res) => {
	try {
		const users = await prisma.user.findMany({
			orderBy: {
				createdAt: 'desc',
			},
			take: 10, // get the latest 10 products
		});
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// get the product details
app.get('/api/products/:slug', async (req, res) => {
	const { slug } = req.params;
	try {
		const product = await prisma.product.findUnique({
			where: {
				slug: slug,
			},
		});
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		res.json(product);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
