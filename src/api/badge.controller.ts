import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { BadgeService } from "./badge.service";
import { Theme } from "src/themes/theme.type";
import { Response } from "express";


@Controller('box')
export class BadgeController {
  constructor(private readonly boxService: BadgeService) {}

  @Get()
  generateBox(@Query() body: { link: string; title: string; date: string; name: string; theme: Theme }) {
    const { link, title, date, name, theme } = body;

    const boxHtml = this.boxService.generateBox(link, title, date, name, theme);
    // res.send(boxHtml);
    return boxHtml;
  }
}
