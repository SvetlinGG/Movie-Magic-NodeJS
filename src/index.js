import express from 'express';
import handlebars from 'express-handlebars';
import homeController  from './controllers/homeController.js';

const app = express();
const port = 3000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use(homeController);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))


