import express from 'express';
// import path from 'path';
import boxRouter from './routes/box';

const app = express();
const PORT = 3001;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use('/box', boxRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});