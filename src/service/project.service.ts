import {
  CreateProjectBodyPayload,
  UpdateProjectBodyPayload,
} from "../types/types";
import prismaClient from "../config/prisma";

export const queryProjects = async () => {
  return await prismaClient.project.findMany();
};

export const queryLatestProjects = async () => {
  return await prismaClient.project.findMany({
    orderBy: {
      startDate: "desc",
    },
    take: 10,
  });
};

export const findProject = async (id: string) => {
  return await prismaClient.project.findUnique({
    where: { id },
  });
};

export const findProjectArtifacts = async (id: string) => {
  return await prismaClient.project.findUnique({
    where: { id },
    include: {
      projectToArtifact: {
        select: {
          artifact: true,
          worktime: true,
        },
      },
    },
  });
};

export const findProjectTasks = async (id: string) => {
  return await prismaClient.project.findUnique({
    where: { id },
    include: {
      projectToTask: {
        select: {
          task: true,
        },
      },
    },
  });
};

export const createProject = async (data: CreateProjectBodyPayload) => {
  return await prismaClient.project.create({
    data,
  });
};

export const updateProject = async (
  id: string,
  data: UpdateProjectBodyPayload
) => {
  return await prismaClient.project.update({
    where: { id },
    data,
  });
};

export const deleteProject = async (id: string) => {
  return await prismaClient.project.delete({
    where: { id },
  });
};

export const calculatePlannedWorkingTime = async (id: string) => {
  const artifactTimes = await prismaClient.project.findUnique({
    where: { id },
    select: {
      projectToArtifact: {
        select: {
          artifact: {
            select: {
              plannedWorkingTime: true,
            },
          },
        },
      },
    },
  });

  let sum = 0;

  if (!artifactTimes) {
    return null;
  }

  for (const temp of artifactTimes?.projectToArtifact) {
    sum += temp.artifact.plannedWorkingTime;
  }

  return { sum };
};

export const calculateWorkingTime = async (id: string) => {
  const project = await prismaClient.project.findUnique({
    where: { id },
    select: {
      projectToArtifact: {
        select: {
          worktime: true,
        },
      },
    },
  });

  let sum = 0;

  if (!project) {
    return null;
  }

  console.log(project);
  for (const temp of project.projectToArtifact) {
    if (temp.worktime) {
      sum += temp.worktime;
    }
  }

  return { sum };
};

export const connectArtifactToProject = async (
  projectId: string,
  artifactId: string,
  workingTime: number = 0
) => {
  return await prismaClient.projectToArtifact.create({
    data: {
      project_id: projectId,
      artifact_id: artifactId,
      worktime: workingTime,
    },
  });
};

export const updateWorkingTime = async (
  projectId: string,
  artifactId: string,
  workingTime: number
) => {
  return await prismaClient.projectToArtifact.update({
    where: {
      artifact_id_project_id: {
        project_id: projectId,
        artifact_id: artifactId,
      },
    },
    data: {
      worktime: workingTime,
    },
  });
};

export const disconnectArtifactFromProject = async (
  projectId: string,
  artifactId: string
) => {
  return await prismaClient.projectToArtifact.delete({
    where: {
      artifact_id_project_id: {
        project_id: projectId,
        artifact_id: artifactId,
      },
    },
  });
};

export const connectTaskToProject = async (
  projectId: string,
  taskId: string
) => {
  return await prismaClient.projectToTask.create({
    data: {
      project_id: projectId,
      task_id: taskId,
    },
  });
};

export const disconnectTaskFromProject = async (
  projectId: string,
  taskId: string
) => {
  return await prismaClient.projectToTask.delete({
    where: {
      project_id_task_id: {
        project_id: projectId,
        task_id: taskId,
      },
    },
  });
};
