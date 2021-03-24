import {IsInt, Min, IsString, IsDate} from "class-validator";
export class TaskDto {
    @IsInt()
    @Min(1)
    id: number | undefined;

    @IsString()
    title: string;
    
    @IsDate()
    finishDate: Date;

    @IsDate()
    plannedFinishDate: Date;

    @IsDate()
    startDate: Date;

    @IsString()
    description: string;
}