import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "src/domain/task/interfaces/task.interface";
import { TaskEntity } from "src/type-orm-entities/task.entity";
import { Repository,  } from "typeorm";
import { TaskRepository } from "../domain/task/interfaces/task-repository.interface";

export class TypeormTaskRepository implements TaskRepository {

    constructor(@InjectRepository(TaskEntity) private readonly typeormRepo: Repository<Task>) {

    }

    add(task: Task): Task {
        return this.typeormRepo.create(task);
    }
    addAsync(task: Task): Promise<Task> {
        return Promise.resolve(this.add(task));
    }
    remove(task: Task) {
        this.typeormRepo.delete(task.id);
    }
    removeAsync(task: Task): Promise<void> {
        return new Promise((resolve, reject) => {
            this.remove(task);
            resolve();
        });
    }
    update(task: Task) {
        throw new Error("Method not implemented.");
    }
    updateAsync(task: Task): Promise<void> {
        return this.typeormRepo.save(task).then(() => {});
    }
    get(taskId: number): Task {
        throw new Error("Method not implemented.");
    }
    getAsync(taskId: number): Promise<Task> {
        return this.typeormRepo.findOne(taskId);
    }
    getAll(): Task[] {
        throw new Error("Method not implemented.");
    }
    getAllAsync(): Promise<Task[]> {
        return this.typeormRepo.find();
    }
    query(predicate: (t: Task) => boolean): Task[] {
        throw new Error("Method not implemented.");
    }
    queryFirst(predicate: (t: Task) => boolean): Task {
        throw new Error("Method not implemented.");
    }
    async queryAsync(predicate: (t: Task) => boolean): Promise<Task[]> {
        const all = await this.getAllAsync();
        return all.filter(predicate);
    }
    async queryFirstAsync(predicate: (t: Task) => boolean): Promise<Task> {
        const all =  await this.getAllAsync();
        return all.find(predicate);
    }

}