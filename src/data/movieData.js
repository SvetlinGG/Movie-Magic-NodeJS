import fs from 'fs/promises';
import path from 'path';

async function getDb(){
    const dbPath = path.resolve('./src/db.json');
    const db = await fs.readFile(dbPath, {encoding: 'utf-8'});

    return db;

}

async function getMovies(){
    
    const data = JSON.parse(db);

    return data.movies;
}
export default {
    getMovies,
}