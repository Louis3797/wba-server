import { Request, Response } from "express";
import httpStatus from "http-status";
import { artifactService } from "../service";
import {
  CreateArtifactBodyPayload,
  IDParam,
  TypedRequest,
  UpdateArtifactBodyPayload,
} from "../types/types";

export const getArtifacts = async (_req: Request, res: Response) => {
  const artifacts = await artifactService.queryArtifacts();

  res.status(httpStatus.OK).json(artifacts);
};

export const getArtifact = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const artifact = await artifactService.findArtifact(id);

  if (!artifact) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "artifact not found!" });
  }

  res.status(httpStatus.OK).json(artifact);
};

export const getArtifactWithTask = async (
  req: Request<IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const artifact = await artifactService.findArtifactWithTask(id);

  if (!artifact) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "artifact not found!" });
  }

  res.status(httpStatus.OK).json(artifact);
};

export const createArtifact = async (
  req: TypedRequest<CreateArtifactBodyPayload>,
  res: Response
) => {
  const { plannedWorkingTime, shortDescription, title, task_id } = req.body;

  console.log(req.body.plannedWorkingTime);

  if (!shortDescription || !title || !plannedWorkingTime || !task_id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Send Body is not correct" });
  }

  const artifact = await artifactService.createArtifact({
    plannedWorkingTime: plannedWorkingTime!,
    shortDescription: shortDescription!,
    title: title!,
    task_id: task_id!,
  });

  res.status(httpStatus.CREATED).json(artifact);
};

export const updateArtifact = async (
  req: TypedRequest<UpdateArtifactBodyPayload, IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const { plannedWorkingTime, shortDescription, title, task_id } = req.body;

  if (!shortDescription || !title || !plannedWorkingTime || !task_id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Send Body is not correct" });
  }

  const artifact = await artifactService.updateArtifact(id, {
    plannedWorkingTime,
    shortDescription,
    title,
    task_id,
  });

  res.status(httpStatus.OK).json(artifact);
};

export const removeArtifact = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const artifact = await artifactService.deleteArtifact(id);

  res.status(httpStatus.OK).json(artifact);
};
