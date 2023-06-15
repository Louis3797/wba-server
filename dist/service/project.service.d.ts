import { CreateProjectBodyPayload, UpdateProjectBodyPayload } from "../types/types";
export declare const queryProjects: () => Promise<import(".prisma/client").Project[]>;
export declare const queryLatestProjects: () => Promise<import(".prisma/client").Project[]>;
export declare const findProject: (id: string) => Promise<import(".prisma/client").Project | null>;
export declare const findProjectArtifacts: (id: string) => Promise<(import(".prisma/client").Project & {
    projectToArtifact: {
        artifact: import(".prisma/client").Artifact;
        worktime: number | null;
    }[];
}) | null>;
export declare const findProjectTasks: (id: string) => Promise<(import(".prisma/client").Project & {
    projectToTask: {
        task: import(".prisma/client").Task;
    }[];
}) | null>;
export declare const createProject: (data: CreateProjectBodyPayload) => Promise<import(".prisma/client").Project>;
export declare const updateProject: (id: string, data: UpdateProjectBodyPayload) => Promise<import(".prisma/client").Project>;
export declare const deleteProject: (id: string) => Promise<import(".prisma/client").Project>;
export declare const calculatePlannedWorkingTime: (id: string) => Promise<{
    sum: number;
} | null>;
export declare const calculateWorkingTime: (id: string) => Promise<{
    sum: number;
} | null>;
export declare const connectArtifactToProject: (projectId: string, artifactId: string, workingTime?: number) => Promise<import(".prisma/client").ProjectToArtifact>;
export declare const updateWorkingTime: (projectId: string, artifactId: string, workingTime: number) => Promise<import(".prisma/client").ProjectToArtifact>;
export declare const disconnectArtifactFromProject: (projectId: string, artifactId: string) => Promise<import(".prisma/client").ProjectToArtifact>;
export declare const connectTaskToProject: (projectId: string, taskId: string) => Promise<import(".prisma/client").ProjectToTask>;
export declare const disconnectTaskFromProject: (projectId: string, taskId: string) => Promise<import(".prisma/client").ProjectToTask>;
