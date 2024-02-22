import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

async function dbConnect() {
	if (!db) {
		try {
			db = new PrismaClient();
		} catch (error) {
			throw new Error('Connection failed!');
		}
	}

	return db;
}

export default dbConnect;
