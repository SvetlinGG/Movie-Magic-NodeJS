import fs from 'fs/promises';
import path from 'path';



async function getMovies(){
    const dbPath = path.resolve('./src/db.json')
    const db = await fs.readFile(dbPath);

    return db.movies;
}
export default {
    getMovies,
}