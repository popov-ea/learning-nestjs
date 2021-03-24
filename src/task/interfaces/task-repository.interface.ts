import { Task } from "./task.interface";

export interface TaskRepository {
    add(task: Task): Task
    addAsync(task: Task): Promise<Task>
    remove(task: Task)
    removeAsync(task: Task): Promise<void>
    update(task: Task)
    updateAsync(task: Task): Promise<void>

    get(taskId: number): Task
    getAsync(taskId: number): Promise<Task>

    getAll(): Task[]
    getAllAsync(): Promise<Task[]>

    query(predicate: (t: Task) => boolean): Task[]
    queryFirst(predicate: (t: Task) => boolean): Task

    queryAsync(predicate: (t: Task) => boolean): Promise<Task[]>
    queryFirstAsync(predicate: (t: Task) => boolean): Promise<Task>
}

export const TASK_REPOSITORY = "TASK_REPOSITORY";