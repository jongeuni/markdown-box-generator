import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { BadgeService } from './badge.service';

@Controller('badge')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Get()
  getBadge(@Query('name') name: string, @Query('title') title: string, @Query('date') date: string, @Query('link') link: string, @Query('theme') theme: string, @Res() res: Response) {
    if (!name || !title || !date || !link || !theme) {
      return res.status(400).send('Missing required query parameters');
    }

    const imageBuffer = this.badgeService.createBadge(name, title, date, link, theme);
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  }
}
