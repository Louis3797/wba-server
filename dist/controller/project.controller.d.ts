import { Request, Response } from "express";
import { CreateProjectBodyPayload, IDParam, TypedRequest, UpdateProjectBodyPayload } from "../types/types";
export declare const getProjects: (_req: Request, res: Response) => Promise<void>;
export declare const getLatestProjects: (_req: Request, res: Response) => Promise<void>;
export declare const getProject: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProjectArtifacts: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProjectTasks: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createProject: (req: TypedRequest<CreateProjectBodyPayload>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateProject: (req: TypedRequest<UpdateProjectBodyPayload, IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeProject: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProjectPlannedWorkingTime: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getProjectWorkingTime: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const addArtifactToProject: (req: TypedRequest<{
    workingTime: number;
}, {
    projectId: string;
    artifactId: string;
}>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateArtifactWorkingTime: (req: TypedRequest<{
    workingTime: number;
}, {
    projectId: string;
    artifactId: string;
}>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeArtifactFromProject: (req: Request<{
    projectId: string;
    artifactId: string;
}>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const addTaskToProject: (req: Request<{
    projectId: string;
    taskId: string;
}>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeTaskFromProject: (req: Request<{
    projectId: string;
    taskId: string;
}>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
