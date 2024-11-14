import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Student } from "src/student/student";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    courseName: string;

    @ManyToMany(() => Student, student => student.courses)
    students: Student[];
}
