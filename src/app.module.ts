import { Module } from '@nestjs/common';
import { BadgeModule } from './badge/badge.module';

@Module({
  imports: [BadgeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}