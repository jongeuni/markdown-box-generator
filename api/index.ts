import serverless from 'serverless-http';
import express from 'express';
import boxRouter from '../src/routes/BoxRouter';
import healthRouter from '../src/routes/HealthRouter';

const app = express();

app.use('/api/box', boxRouter);

app.use('/api/health', healthRouter);

app.use((req, res) => {
  console.log('❌ 404 handler triggered for', req.url);
  res.status(404).send('Not Found');
});

export default app;