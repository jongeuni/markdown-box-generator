import { Router } from 'express';
import { BoxService } from '../services/BoxService';

const router = Router();

router.get('/', (req, res) => {
  try {
    const svg = BoxService.generateBox(req.query);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
  } catch (err) {
    console.error('Error in /box:', err);
    res.status(500).send('Error - If you leave an issue on the link to https://github.com/jongeuni/markdown-box-generator/issues/new , we will check it quickly');
  }
});

export default router;