import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student';
import { DeleteResult } from 'typeorm';

@Controller('student')
export class StudentController {

  // we are injecting the StudentService into the Controller constructor
  constructor(private readonly studentService: StudentService) {}

  // get all
  @Get()
  @HttpCode(200)
  getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  // get by id
  @Get(':id')
  @HttpCode(200)
  getStudentById(@Param('id') idToFind: number): Promise<Student> {
    return this.studentService.getStudentById(idToFind);
  }

  // update a student
  @Put('/update/:id')
  @HttpCode(200)
  updateAdvisor(@Param('id') routeId: number, @Body() studentToUpdate) {
    return this.studentService.updateStudent(routeId, studentToUpdate);
  }

  // create new student
  @Post('/create')
  @HttpCode(201)
  createAdvisor(@Body() newStudent: Student) {
    return this.studentService.createStudent(newStudent);
  }

  // delete an advisor
  @Delete('/delete/:id')
  @HttpCode(204)
  deleteAdvisor(@Param('id') id: number): Promise<DeleteResult> {
    return this.studentService.deleteStudent(id);
  }


}
