import fs from 'fs/promises';
import path from 'path';



async function getMovies(){
    const db = await fs.readFile(path.resolve('./src/db.json'));

    return db.movies;
}
export default {
    getMovies,
}