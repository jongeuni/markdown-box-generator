import { Router } from 'express';
import { BoxService } from '../services/BoxService';

const router = Router();

router.get('/', (req, res) => {
  try {
    console.log(req.query);
    const svg = BoxService.generateBox(req.query);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
  } catch (err) {
    console.error('Error in /box:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;