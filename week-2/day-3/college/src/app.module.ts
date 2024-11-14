import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { AdvisorModule } from './advisor/advisor.module';
import { StudentController } from './student/student.controller';
import { CourseController } from './course/course.controller';
import { AdvisorController } from './advisor/advisor.controller';
import { StudentService } from './student/student.service';
import { CourseService } from './course/course.service';
import { AdvisorService } from './advisor/advisor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student';
import { Course } from './course/course';
import { Advisor } from './advisor/advisor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ahu.21',
      database: 'college2',
      synchronize: false, //if this is set to true, any changes made in the app will affect your schema
      entities: [Advisor, Course, Student]
    }),
    
    StudentModule, 
    CourseModule, 
    AdvisorModule
  ],
  controllers: [AppController, StudentController, CourseController, AdvisorController],
  providers: [AppService, StudentService, CourseService, AdvisorService],
})

export class AppModule {}
