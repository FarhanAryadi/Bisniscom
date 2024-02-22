import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

// asynchronous function to connect to the database
async function dbConnect() {
	// If the PrismaClient instance doesn't exist
	if (!db) {
		try {
			// Create a new PrismaClient instance
			db = new PrismaClient();
		} catch (error) {
			throw new Error('Connection failed!');
		}
	}

	return db;
}

export default dbConnect;
