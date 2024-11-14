import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './course';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CourseService {

    constructor(@InjectRepository(Course) private repo: Repository<Course>) {}

    // get all
    async getAllCourses(): Promise<Course[]> {
        return await this.repo.find({
            relations: {
                students: {
                    advisor: true
                }
            }
        });
    }

    // get by ID
    async getCourseById(idToFind: number): Promise<Course> {
        return await this.repo.findOneOrFail({
            where: {
                id: idToFind
            },
            relations: {
                students: {
                    advisor: true
                }
            }
        }).catch(() => {
            throw new HttpException(`Course with ID ${idToFind} does not exist!`, HttpStatus.NOT_FOUND)
        })
    }


    //create a new course
    async createCourse(newCourse: Course): Promise<Course> {
        await this.repo.exists({
            where: {
                id: newCourse.id
            }
        }).then(exists => {
            if(exists)
                throw new HttpException(`Course with ID ${newCourse.id} already exists!`, HttpStatus.BAD_REQUEST)
        })

        return await this.repo.save(newCourse)
    }

    // update one
    async updateCourse(routeId: number, courseToUpdate: Course) {
        // checking if the route ID and the one in the body match
        if (routeId != courseToUpdate.id) {
            throw new HttpException(`Route ID and Body ID do not match!`, HttpStatus.BAD_REQUEST);
        }

        // checking that the Course we want to update exists in the database already
        // if it doesn't we'd create a new one, which we don't want
        await this.repo.exists({
            where: {
                id: courseToUpdate.id
            }
        }).then(exists => {
            if (!exists)
                throw new HttpException(`Course with ID ${courseToUpdate.id} does not exist!`, HttpStatus.NOT_FOUND);
        })

        return await this.repo.save(courseToUpdate);
    }

    // delete one
    async deleteCourse(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }


}
