import { Router } from 'express';
import { BoxService } from '../services/BoxService';

const router = Router();

router.get('/', (req, res) => {
  const svg = BoxService.generateBox(req.query);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

export default router;