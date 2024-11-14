import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course';
import { DeleteResult } from 'typeorm';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  //get all
  @Get()
  @HttpCode(200)
  getAllCourses(): Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  // get by ID
  @Get(':id')
  @HttpCode(200)
  getCourseById(@Param('id') idToFind: number): Promise<Course> {
      return this.courseService.getCourseById(idToFind);
  }

  // create one
  @Post()
  @HttpCode(201)
  createCourse(@Body() newCourse: Course) {
      return this.courseService.createCourse(newCourse);
  }

  // update a course
  @Put('/update/:id')
  @HttpCode(200)
  updateAdvisor(@Param('id') routeId: number, @Body() advisorToUpdate) {
    return this.courseService.updateCourse(routeId, advisorToUpdate);
  }

  // delete a course
  @Delete('/delete/:id')
  @HttpCode(204)
  deleteAdvisor(@Param('id') id: number): Promise<DeleteResult> {
    return this.courseService.deleteCourse(id);
  }

}
