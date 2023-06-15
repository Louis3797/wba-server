import {
  CreateArtifactBodyPayload,
  UpdateArtifactBodyPayload,
} from "../types/types";
import prismaClient from "../config/prisma";

export const queryArtifacts = async () => {
  return await prismaClient.artifact.findMany();
};

export const findArtifact = async (id: string) => {
  return await prismaClient.artifact.findUnique({
    where: { id },
  });
};

export const findArtifactWithTask = async (id: string) => {
  return await prismaClient.artifact.findUnique({
    where: { id },
    include: {
      task: true,
    },
  });
};

export const createArtifact = async (data: CreateArtifactBodyPayload) => {
  return await prismaClient.artifact.create({
    data,
  });
};

export const updateArtifact = async (
  id: string,
  data: UpdateArtifactBodyPayload
) => {
  return await prismaClient.artifact.update({
    where: { id },
    data,
  });
};

export const deleteArtifact = async (id: string) => {
  return await prismaClient.artifact.delete({
    where: { id },
  });
};
