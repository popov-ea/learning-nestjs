import { TaskDto } from "./task.dto";
export interface TaskCreationResultDto {
    success: boolean,
    task: TaskDto
}