import { Request, Response } from "express";
import httpStatus from "http-status";
import { taskService } from "../service";
import {
  CreateTaskBodyPayload,
  IDParam,
  TypedRequest,
  UpdateTaskBodyPayload,
} from "../types/types";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await taskService.queryTasks();

  res.status(httpStatus.OK).json(tasks);
};

export const getTask = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const task = await taskService.findTask(id);

  if (!task) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "task not found!" });
  }

  res.status(httpStatus.OK).json(task);
};

export const createTask = async (
  req: TypedRequest<CreateTaskBodyPayload>,
  res: Response
) => {
  const { shortDescription, title } = req.body;

  if (!shortDescription || !title) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Send Body is not correct" });
  }

  const task = await taskService.createTask({
    shortDescription,
    title,
  });

  res.status(httpStatus.CREATED).json(task);
};

export const updateTask = async (
  req: TypedRequest<UpdateTaskBodyPayload, IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const { shortDescription, title } = req.body;

  if (!shortDescription || !title) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Send Body is not correct" });
  }

  const task = await taskService.updateTask(id, {
    shortDescription,
    title,
  });

  res.status(httpStatus.OK).json(task);
};

export const removeTask = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const task = await taskService.deleteTask(id);

  res.status(httpStatus.OK).json(task);
};
