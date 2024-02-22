import { PrismaClient } from '@prisma/client';
import { cache } from 'react';

// Create a new instance of PrismaClient
const prisma = new PrismaClient();
// Define a revalidation time in seconds
const revalidate = 3600;

// function to get the latest products
const getLatest = cache(async () => {
	// Use Prisma to fetch the latest 8 products from the database, ordered by creation date
	const products = await prisma.product.findMany({
		orderBy: {
			createdAt: 'desc',
		},
		take: 8,
	});
	// Return the fetched products
	return products;
});

// function to get a product by its slug
const getBySlug = cache(async (slug: string) => {
	// fetch the product with the given slug from the database
	const product = await prisma.product.findUnique({
		where: {
			slug: slug,
		},
	});
	// Return the fetched products
	return product;
});

// function to get the featured products
const getFeatured = cache(async () => {
	// fetch the first 3 featured products from the database
	const products = await prisma.product.findMany({
		where: {
			isFeatured: true,
		},
		take: 3,
	});

	return products;
});
// Export an object with the functions as methods
const productService = {
	getLatest,
	getBySlug,
	getFeatured,
};

export default productService;
