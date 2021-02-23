import { Task } from "./task.interface";

export interface TaskRepository {
    add(task: Task): Task
    remove(task: Task): Task
    update(task: Task): Task

    query(predicate: (t: Task) => boolean): Array<Task>
    queryFirst(predicate: (t: Task) => boolean): Task
}

export const TASK_REPOSITORY = "TASK_REPOSITORY";