import { Task } from "./interfaces/task.interface";
import { TaskRepository } from "./interfaces/task-repository.interface";

export class DummyTaskRepository implements TaskRepository {
    remove(task: Task): Task {
        throw new Error("Method not implemented.");
    }
    update(task: Task): Task {
        throw new Error("Method not implemented.");
    }
    add(task: Task): Task {
        throw new Error("Method not implemented");
    }

    
    query(predicate: (t: Task) => boolean): Task[] {
        throw new Error("Method not implemented.");
    }
    queryFirst(predicate: (t: Task) => boolean): Task {
        throw new Error("Method not implemented.");
    }    
}