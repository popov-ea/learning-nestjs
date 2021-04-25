import { Type } from "class-transformer";
import { IsString, IsInt, IsDate, Min, IsNotEmpty } from "class-validator";
export default class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    description: string; 
    @Type(() => Date)
    @IsDate()
    plannedFinishDate: Date; 
}