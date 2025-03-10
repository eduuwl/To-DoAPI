import { IsString, IsNotEmpty, IsOptional, IsDateString, IsEnum } from "class-validator";
import { TaskStatus } from "../entities/task.entity";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsDateString()
    activityDate: Date;

    @IsEnum(TaskStatus)
    @IsOptional()
    status?: TaskStatus;
}