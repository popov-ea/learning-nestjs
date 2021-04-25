import { Type } from "class-transformer";
import { IsString, IsDate, IsDateString, IsNotEmpty } from "class-validator";
export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    description: string; 
    @Type(() => Date)
    @IsDate()
    plannedFinishDate: Date; 
}