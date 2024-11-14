import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student';
import { DeleteResult, Repository } from 'typeorm';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class StudentService {

    // here we're creating and injecting a repository for our students right in the constructor
    constructor(@InjectRepository(Student) private repo: Repository<Student>, private courseService: CourseService) {}

    // gets all students
    async getAllStudents(): Promise<Student[]> {
        return await this.repo.find({
            relations: {
                advisor: true, 
                courses: true
            }
        });
    }

    // get student by id
    async getStudentById(idToFind: number): Promise<Student> {
        return await this.repo.findOneOrFail({
            where: {
                id: idToFind
            },
            relations: {
                advisor: true, 
                courses: true
            }
        }).catch(() => {
            throw new HttpException(`Student with Id ${idToFind} does not exist!`, HttpStatus.NOT_FOUND)
        })
    }

    // creates a new student
    async createStudent(newStudent: Student): Promise<Student> {
        await this.repo.exists({
            where: {
                id: newStudent.id
            }
        }).then(exists => {
            if(exists)
                throw new HttpException(`Student with ID ${newStudent.id} already exists!`, HttpStatus.BAD_REQUEST)
        })

        return await this.repo.save(newStudent)
    }

    // update one
    async updateStudent(routeId: number, studentToUpdate: Student) {
        // checking if the route ID and the one in the body match
        if (routeId != studentToUpdate.id) {
            throw new HttpException(`Route ID and Body ID do not match!`, HttpStatus.BAD_REQUEST);
        }

        // checking that the Student we want to update exists in the database already
        // if it doesn't we'd create a new one, which we don't want
        await this.repo.exists({
            where: {
                id: studentToUpdate.id
            }
        }).then(exists => {
            if (!exists)
                throw new HttpException(`Student with ID ${studentToUpdate.id} does not exist!`, HttpStatus.NOT_FOUND);
        })

        return await this.repo.save(studentToUpdate);
    }

    // delete one
    async deleteStudent(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }
}
