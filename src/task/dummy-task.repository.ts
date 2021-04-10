import { Task } from "./interfaces/task.interface";
import { TaskRepository } from "./interfaces/task-repository.interface";

export class DummyTaskRepository implements TaskRepository {
    private tasks: Task[] = [];

    get(taskId: number): Task {
        return this.tasks.find(t => t.id === taskId);
    }
    async getAsync(taskId: number): Promise<Task> {
        return Promise.resolve(this.get(taskId));
    }

    getAll(): Task[] {
        return [...this.tasks];
    }
    async getAllAsync(): Promise<Task[]> {
        return Promise.resolve(this.getAll());
    }

    remove(task: Task) {
        if (!this.tasks.includes(task)) {
            throw new Error(`Task with id ${task.id} not found in repository`);
        }
        this.tasks = this.tasks.filter(t => t != task);
    }
    async removeAsync(task: Task): Promise<void> {
        return Promise.resolve(this.remove(task));
    }

    update(task: Task) {
        return;
    }
    async updateAsync(task: Task): Promise<void> {
        return Promise.resolve(this.update(task))
    }

    add(task: Task): Task {
        task.id = this.tasks.length > 0 ? 
            Math.max(...this.tasks.map(t => t.id)) + 1
            : 1;
        const index = this.tasks.push(task);
        return this.tasks[index];
    }
    async addAsync(task: Task): Promise<Task> {
        return Promise.resolve(this.add(task));
    }

    query(predicate: (t: Task) => boolean): Task[] {
        return this.tasks.filter(predicate);
    }
    async queryAsync(predicate: (t: Task) => boolean): Promise<Task[]> {
        return Promise.resolve(this.query(predicate));
    }

    queryFirst(predicate: (t: Task) => boolean): Task {
        return this.tasks.find(predicate);
    }
    queryFirstAsync(predicate: (t: Task) => boolean): Promise<Task> {
        return Promise.resolve(this.queryFirst(predicate));
    }
}