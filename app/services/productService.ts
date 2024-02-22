import dbConnect from '@/lib/dbConnect';
import { PrismaClient, Product } from '@prisma/client';
import { cache } from 'react';

const prisma = new PrismaClient();
const revalidate = 3600;

const getLatest = cache(async () => {
	const products = await prisma.product.findMany({
		orderBy: {
			id: 'desc',
		},
		take: 8,
	});

	return products;
});

const getBySlug = cache(async (slug: string) => {
	const product = await prisma.product.findUnique({
		where: {
			slug: slug,
		},
	});

	return product;
});

const getFeatured = cache(async () => {
	const products = await prisma.product.findMany({
		where: {
			isFeatured: true,
		},
		take: 3,
	});

	return products;
});

const productService = {
	getLatest,
	getBySlug,
	getFeatured,
};

export default productService;
