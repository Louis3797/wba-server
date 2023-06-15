import { CreateTaskBodyPayload, UpdateTaskBodyPayload } from "../types/types";
export declare const queryTasks: () => Promise<import(".prisma/client").Task[]>;
export declare const findTask: (id: string) => Promise<import(".prisma/client").Task | null>;
export declare const createTask: (data: CreateTaskBodyPayload) => Promise<import(".prisma/client").Task>;
export declare const updateTask: (id: string, data: UpdateTaskBodyPayload) => Promise<import(".prisma/client").Task>;
export declare const deleteTask: (id: string) => Promise<import(".prisma/client").Task>;
