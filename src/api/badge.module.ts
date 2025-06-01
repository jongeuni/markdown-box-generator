// src/badge/badge.module.ts
import { Module } from '@nestjs/common';
import { BadgeService } from '../api/badge.service';
import { BadgeController } from '../api/badge.controller';

@Module({
  providers: [BadgeService],
  controllers: [BadgeController],
})
export class BadgeModule {}
