import { Request, Response } from "express";
import { CreateArtifactBodyPayload, IDParam, TypedRequest, UpdateArtifactBodyPayload } from "../types/types";
export declare const getArtifacts: (_req: Request, res: Response) => Promise<void>;
export declare const getArtifact: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getArtifactWithTask: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createArtifact: (req: TypedRequest<CreateArtifactBodyPayload>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateArtifact: (req: TypedRequest<UpdateArtifactBodyPayload, IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeArtifact: (req: Request<IDParam>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
