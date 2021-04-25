import { Task } from "../domain/task/interfaces/task.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskEntity implements Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: true})
    finishDate: Date;

    @Column({nullable: false})
    plannedFinishDate: Date;

    @Column({nullable: true})
    startDate: Date;

    @Column({nullable: true})
    description: string;    
}