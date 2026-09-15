import { neon } from '@neondatabase/serverless';

const dbURL = process.env.DATABASE_URL;

if (!dbURL) {
    throw "DATABASE_URL not set. check your environment variables";
}
export const sql = neon(dbURL);


export class DatabaseError extends Error {
    constructor(
        message: string,
        public statusCode: number = 500,
    ) {
        super(message);
        this.name = 'DatabaseError';
    }
}

export class DataFormatError extends DatabaseError {
    zodErrors?: any;
    constructor(message: string, zodErrors?: any) {
        super(message, 500);
        this.name = 'DataFormatError';
        this.zodErrors = zodErrors;
    }
}