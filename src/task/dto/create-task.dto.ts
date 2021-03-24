import { IsString, IsDate } from "class-validator";
export class CreateTaskDto {
    @IsString()
    title: string;
    @IsString()
    description: string; 
    @IsDate()
    plannedFinishDate: Date; 
}