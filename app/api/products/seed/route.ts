import dbConnect from '@/lib/dbConnect';
import data from '@/lib/models/data';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
	const { users, products } = data;

	try {
		if (!users || !products) {
			throw new Error('Users or products data is missing');
		}
		await dbConnect();
		await prisma.$transaction([
			prisma.user.deleteMany(),
			prisma.user.createMany({ data: users }),
			prisma.product.deleteMany(),
			prisma.product.createMany({ data: products }),
		]);

		return NextResponse.json({
			message: 'seeded successfully',
			users,
			products,
		});
	} catch (error: any) {
		console.error(error);
		return NextResponse.json({
			message: 'An error occurred while seeding the data',
			error: error.message,
		});
	}
};
