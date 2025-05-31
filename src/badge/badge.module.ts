// src/badge/badge.module.ts
import { Module } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { BadgeController } from './badge.controller';

@Module({
  providers: [BadgeService],
  controllers: [BadgeController],
})
export class BadgeModule {}
