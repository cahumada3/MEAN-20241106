import { Module } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { AdvisorController } from './advisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advisor } from './advisor';

@Module({
  imports: [TypeOrmModule.forFeature([Advisor])],
  exports: [TypeOrmModule],
  controllers: [AdvisorController],
  providers: [AdvisorService],
})
export class AdvisorModule {}
