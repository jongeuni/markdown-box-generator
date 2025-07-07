import express from 'express';
// import path from 'path';
import boxRouter from './routes/BoxRouter';
import path from 'path';

const app = express();
const PORT = 3001;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/box', boxRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});