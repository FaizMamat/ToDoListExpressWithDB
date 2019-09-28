import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";

@Entity()
export class ListToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column()
    create_date: Date;

    @Column()
    complete_date: Date;

    @Column()
    notes: string;

    @Column()
    category: string;
}