import { Request } from "express";
import { DeepPartial } from "utility-types";
export type TypedRequest<ReqBody = Record<string, unknown>, ParamsDictionary = Record<string, unknown>, QueryString = Record<string, unknown>> = Request<Partial<ParamsDictionary>, Record<string, unknown>, DeepPartial<ReqBody>, DeepPartial<QueryString>>;
export type CreateProjectBodyPayload = {
    shortDescription: string;
    longDescription: string;
    logo: string;
    startDate: string;
    endDate: string;
    title: string;
};
export type UpdateProjectBodyPayload = CreateProjectBodyPayload;
export type CreateArtifactBodyPayload = {
    plannedWorkingTime: number;
    shortDescription: string;
    title: string;
    task_id: string;
};
export type UpdateArtifactBodyPayload = CreateArtifactBodyPayload;
export type CreateTaskBodyPayload = {
    shortDescription: string;
    title: string;
};
export type UpdateTaskBodyPayload = CreateTaskBodyPayload;
export type IDParam = {
    id: string;
};
