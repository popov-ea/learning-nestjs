import { IsString, IsInt, IsDate, Min } from "class-validator";
export default class UpdateTaskDto {
    @IsInt()
    @Min(1)
    id: number;
    title: string;
    description: string; 
    plannedFinishDate: Date; 
}