import { Module } from '@nestjs/common';
import { BadgeModule } from './api/badge.module';

@Module({
  imports: [BadgeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}