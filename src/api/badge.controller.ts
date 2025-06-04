import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { BadgeService } from "./badge.service";
import { Theme } from "src/themes/theme.type";
import { Response } from "express";


@Controller('box')
export class BadgeController {
  constructor(private readonly boxService: BadgeService) {}

  @Get()
generateBox(
  @Query() query: { link: string; title: string; date: string; name: string; theme: Theme },
  @Res() res: Response,
) {
  const svg = this.boxService.generateSvgBox(
    query.link,
    query.title,
    query.date,
    query.name,
    query.theme,
  );

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
}
}
