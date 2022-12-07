import express from 'express'
const app = express()
import path from 'path'
import {fileURLToPath} from 'url'
//import mainRoutes from './routes/index';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
//app.use(mainRoutes);

app.get("/", (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log(`
        PORT: http://localhost:3000
    `)
})