import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  console.log('✅ Router check');
  res.setHeader('Content-Type', 'text/plain');
  res.send('✅ router working on Vercel!');
});

export default router;