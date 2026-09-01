import {neon} from '@neondatabase/serverless' ;

const dbURL = process.env.DATABASE_URL ;

if(!dbURL){
    throw "DATABASE_URL not set. check your environment variables" ;
}
export const sql = neon(dbURL) ;

