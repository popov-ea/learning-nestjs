import { Type } from "class-transformer";
import { IsString, IsDate, IsDateString } from "class-validator";
export class CreateTaskDto {
    @IsString()
    title: string;
    @IsString()
    description: string; 
    @Type(() => Date)
    @IsDate()
    plannedFinishDate: Date; 
}