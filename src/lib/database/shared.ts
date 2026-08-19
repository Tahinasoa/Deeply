import {neon} from '@neondatabase/serverless' ;

const databaULR = process.env.DATABASE_URL ;

if(!databaULR){
    throw "DATABASE_URL not set. check your environment variables" ;
}
export const sql = neon(databaULR) ;

