import serverless from 'serverless-http';
import express from 'express';

const app = express();

app.get('/box', (req, res) => {
  res.send('box ok');
});

app.get('/health', (req, res) => {
  res.send('health ok');
});

app.use((req, res) => {
  console.log('❌ 404 handler triggered for', req.url);
  res.status(404).send('Not Found');
});

export default app;