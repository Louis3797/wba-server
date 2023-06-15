-- CreateTable
CREATE TABLE `Artifact` (
    `id` VARCHAR(191) NOT NULL,
    `plannedWorkingtTime` DOUBLE NOT NULL,
    `shortDescription` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `task_id` VARCHAR(191) NULL,

    INDEX `FK_ARTIFACT_task_id`(`task_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `shortDescription` VARCHAR(255) NOT NULL,
    `longDescription` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `startDate` DATE NOT NULL,
    `endDate` DATE NOT NULL,
    `title` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(191) NOT NULL,
    `shortDescription` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectToArtifact` (
    `worktime` DOUBLE NOT NULL,
    `artifact_id` VARCHAR(191) NOT NULL,
    `project_id` VARCHAR(191) NOT NULL,

    INDEX `FK_PROJECTTOARTIFACT_artifact_id`(`artifact_id`),
    INDEX `FK_PROJECTTOARTIFACT_project_id`(`project_id`),
    PRIMARY KEY (`artifact_id`, `project_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectToTask` (
    `project_id` VARCHAR(191) NOT NULL,
    `task_id` VARCHAR(191) NOT NULL,

    INDEX `FK_PROJECTTOTASK_project_id`(`project_id`),
    INDEX `FK_PROJECTTOTASK_task_id`(`task_id`),
    PRIMARY KEY (`project_id`, `task_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Artifact` ADD CONSTRAINT `FK_ARTIFACT_task_id` FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectToArtifact` ADD CONSTRAINT `FK_PROJECTTOARTIFACT_artifact_id` FOREIGN KEY (`artifact_id`) REFERENCES `Artifact`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectToArtifact` ADD CONSTRAINT `FK_PROJECTTOARTIFACT_project_id` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectToTask` ADD CONSTRAINT `FK_PROJECTTOTASK_project_id` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectToTask` ADD CONSTRAINT `FK_PROJECTTOTASK_task_id` FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
