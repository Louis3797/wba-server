import { CreateArtifactBodyPayload, UpdateArtifactBodyPayload } from "../types/types";
export declare const queryArtifacts: () => Promise<import(".prisma/client").Artifact[]>;
export declare const findArtifact: (id: string) => Promise<import(".prisma/client").Artifact | null>;
export declare const findArtifactWithTask: (id: string) => Promise<(import(".prisma/client").Artifact & {
    task: import(".prisma/client").Task;
}) | null>;
export declare const createArtifact: (data: CreateArtifactBodyPayload) => Promise<import(".prisma/client").Artifact>;
export declare const updateArtifact: (id: string, data: UpdateArtifactBodyPayload) => Promise<import(".prisma/client").Artifact>;
export declare const deleteArtifact: (id: string) => Promise<import(".prisma/client").Artifact>;
