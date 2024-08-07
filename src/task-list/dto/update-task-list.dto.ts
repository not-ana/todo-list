import { CreateTaskListDto } from "./create-task-list.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateTaskListDto extends PartialType(CreateTaskListDto) {}