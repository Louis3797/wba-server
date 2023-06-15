import { Request, Response } from "express";
import httpStatus from "http-status";
import { projectService } from "../service";
import {
  CreateProjectBodyPayload,
  IDParam,
  TypedRequest,
  UpdateProjectBodyPayload,
} from "../types/types";

export const getProjects = async (_req: Request, res: Response) => {
  const projects = await projectService.queryProjects();

  res.status(httpStatus.OK).json(projects);
};

export const getLatestProjects = async (_req: Request, res: Response) => {
  const projects = await projectService.queryLatestProjects();

  res.status(httpStatus.OK).json(projects);
};

export const getProject = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const project = await projectService.findProject(id);

  if (!project) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Project not found!" });
  }

  res.status(httpStatus.OK).json(project);
};

export const getProjectArtifacts = async (
  req: Request<IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }
  const project = await projectService.findProjectArtifacts(id);

  if (!project) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Project not found!" });
  }

  res.status(httpStatus.OK).json(project);
};

export const getProjectTasks = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const project = await projectService.findProjectTasks(id);

  if (!project) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Project not found!" });
  }

  res.status(httpStatus.OK).json(project);
};

export const createProject = async (
  req: TypedRequest<CreateProjectBodyPayload>,
  res: Response
) => {
  const { shortDescription, logo, longDescription, startDate, endDate, title } =
    req.body;

  if (
    !shortDescription ||
    !longDescription ||
    !logo ||
    !startDate ||
    !endDate ||
    !title
  ) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Send Body is not correct" });
  }

  const project = await projectService.createProject({
    shortDescription,
    longDescription,
    logo,
    startDate,
    endDate,
    title,
  });

  res.status(httpStatus.CREATED).json(project);
};

export const updateProject = async (
  req: TypedRequest<UpdateProjectBodyPayload, IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const { shortDescription, logo, longDescription, startDate, endDate, title } =
    req.body;

  if (
    !shortDescription ||
    !longDescription ||
    !logo ||
    !startDate ||
    !endDate ||
    !title
  ) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Send Body is not correct" });
  }

  const project = await projectService.updateProject(id, {
    shortDescription,
    longDescription,
    logo,
    startDate,
    endDate,
    title,
  });

  res.status(httpStatus.OK).json(project);
};

export const removeProject = async (req: Request<IDParam>, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const project = await projectService.deleteProject(id);

  res.status(httpStatus.OK).json(project);
};

export const getProjectPlannedWorkingTime = async (
  req: Request<IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const result = await projectService.calculatePlannedWorkingTime(id);

  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Project not found!" });
  }

  res.status(httpStatus.OK).json(result);
};

export const getProjectWorkingTime = async (
  req: Request<IDParam>,
  res: Response
) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "ID needs to be defined!" });
  }

  const result = await projectService.calculateWorkingTime(id);

  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Project not found!" });
  }

  res.status(httpStatus.OK).json(result);
};

export const addArtifactToProject = async (
  req: TypedRequest<
    { workingTime: number },
    { projectId: string; artifactId: string }
  >,
  res: Response
) => {
  const { workingTime } = req.body;

  const { projectId, artifactId } = req.params;
  console.log(workingTime);
  if (!projectId || !artifactId) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "IDs needs to be defined!" });
  }

  if (typeof workingTime === "undefined") {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "workingTime is not defined" });
  }

  const result = await projectService.connectArtifactToProject(
    projectId,
    artifactId,
    workingTime
  );

  res.status(httpStatus.CREATED).json(result);
};

export const updateArtifactWorkingTime = async (
  req: TypedRequest<
    { workingTime: number },
    { projectId: string; artifactId: string }
  >,
  res: Response
) => {
  const { workingTime } = req.body;

  const { projectId, artifactId } = req.params;

  if (!projectId || !artifactId) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "IDs needs to be defined!" });
  }

  if (typeof workingTime === "undefined") {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "workingTime is not defined" });
  }

  const result = await projectService.updateWorkingTime(
    projectId,
    artifactId,
    workingTime
  );

  res.status(httpStatus.OK).json(result);
};

export const removeArtifactFromProject = async (
  req: Request<{ projectId: string; artifactId: string }>,
  res: Response
) => {
  const { projectId, artifactId } = req.params;

  if (!projectId || !artifactId) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "IDs needs to be defined!" });
  }

  const result = await projectService.disconnectArtifactFromProject(
    projectId,
    artifactId
  );

  res.status(httpStatus.OK).json(result);
};

export const addTaskToProject = async (
  req: Request<{ projectId: string; taskId: string }>,
  res: Response
) => {
  const { projectId, taskId } = req.params;

  if (!projectId || !taskId) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "IDs needs to be defined!" });
  }

  const result = await projectService.connectTaskToProject(projectId, taskId);

  res.status(httpStatus.CREATED).json(result);
};

export const removeTaskFromProject = async (
  req: Request<{ projectId: string; taskId: string }>,
  res: Response
) => {
  const { projectId, taskId } = req.params;

  if (!projectId || !taskId) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "IDs needs to be defined!" });
  }

  const result = await projectService.disconnectTaskFromProject(
    projectId,
    taskId
  );

  res.status(httpStatus.CREATED).json(result);
};
