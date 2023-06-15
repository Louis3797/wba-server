import { CreateTaskBodyPayload, UpdateTaskBodyPayload } from "../types/types";
import prismaClient from "../config/prisma";

export const queryTasks = async () => {
  return await prismaClient.task.findMany();
};

export const findTask = async (id: string) => {
  return await prismaClient.task.findUnique({
    where: { id },
  });
};

export const createTask = async (data: CreateTaskBodyPayload) => {
  return await prismaClient.task.create({
    data,
  });
};

export const updateTask = async (id: string, data: UpdateTaskBodyPayload) => {
  return await prismaClient.task.update({
    where: { id },
    data,
  });
};

export const deleteTask = async (id: string) => {
  return await prismaClient.task.delete({
    where: { id },
  });
};
