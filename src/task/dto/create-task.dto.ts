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
    activityDate: string;

    @IsEnum(TaskStatus)
    @IsOptional()
    status?: TaskStatus;
}