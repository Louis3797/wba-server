import { Request, Response } from "express";
import { CreateTaskBodyPayload, IDParam, TypedRequest, UpdateTaskBodyPayload } from "../types/types";
export declare const getTasks: (_req: Request, res: Response) => Promise<void>;
export declare const getTask: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createTask: (req: TypedRequest<CreateTaskBodyPayload>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTask: (req: TypedRequest<UpdateTaskBodyPayload, IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeTask: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
