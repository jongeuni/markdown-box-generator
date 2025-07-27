import serverless from 'serverless-http';
import express from 'express';
import path from 'path';
import boxRouter from '../src/routes/BoxRouter';
import healthRouter from '../src/routes/HealthRouter';

const app = express();

console.log('✅ api/index.ts loaded');

// 정적 파일 제공
app.use('/static', express.static(path.join(__dirname, '../src/static')));

// 라우터
app.use('/api/box', boxRouter);
app.use('/api/health', healthRouter);

app.use((req, res) => {
    res.status(404).send('Not Found');
  });

export default serverless(app);