import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Advisor } from 'src/advisor/advisor';
import { Course } from 'src/course/course';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student { 

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    studentName: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    studentYear: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    advisorId: number;

    // we do the opposite here, connecting to the Advisor class
    @ManyToOne(() => Advisor, advisor => advisor.students)
    advisor: Advisor;

    /**
     * One student can have many coursees and vice versa
     * this side is the "controlling side" 
     * the table name for the join table must be, in this case, student_courses_course
     */
    @ManyToMany(() => Course, course => course.students)
    @JoinTable()
    courses: Course[];
}
