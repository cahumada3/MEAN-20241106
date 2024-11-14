import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { CourseService } from 'src/course/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), CourseModule],
  exports: [TypeOrmModule],

  controllers: [StudentController],
  // to use our CourseService, we have to include in the module here
  providers: [StudentService, CourseService],
})
export class StudentModule {}
