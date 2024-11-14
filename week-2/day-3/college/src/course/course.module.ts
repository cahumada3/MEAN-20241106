import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  exports: [TypeOrmModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
