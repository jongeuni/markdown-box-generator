import serverless from 'serverless-http';
import express from 'express';
import path from 'path';
import boxRouter from '../src/routes/BoxRouter';

const app = express();

console.log('✅ api/index.ts loaded');

// 정적 파일 제공
app.use('/static', express.static(path.join(__dirname, '../src/static')));

// 라우터
app.use('/box', boxRouter);

export default serverless(app);