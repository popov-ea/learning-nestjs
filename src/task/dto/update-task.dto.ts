import { Type } from "class-transformer";
import { IsString, IsInt, IsDate, Min } from "class-validator";
export default class UpdateTaskDto {
    @IsString()
    title: string;
    @IsString()
    description: string; 
    @Type(() => Date)
    @IsDate()
    plannedFinishDate: Date; 
}