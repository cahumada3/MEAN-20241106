import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "src/student/student";

//used npm i class-validator to install
//this will verify that any incoming values for these fields match the classe's types for those varaibles
//or if they are not empty, or any other number validations
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

@Entity() // this is a database entity
export class Advisor {

    // primary key
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    @Length(2, 5)
    advisorName: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    department: string;

    /**
     * One advisor can have many students
     * this takes in 2 lambdas
     *  - where the first one connects to the Student class
     *  - second one tells us which property in the Student class we want to connect to 
     */
    @OneToMany(() => Student, student => student.advisor)
    students: Student[];
}