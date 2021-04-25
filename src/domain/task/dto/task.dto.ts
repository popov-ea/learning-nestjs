export interface TaskDto {
    id: number | undefined;
    title: string;
    finishDate: Date;
    plannedFinishDate: Date;
    startDate: Date;
    description: string;
}