/*
  Warnings:

  - A unique constraint covering the columns `[task_id]` on the table `Artifact` will be added. If there are existing duplicate values, this will fail.
  - Made the column `task_id` on table `Artifact` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Artifact` DROP FOREIGN KEY `FK_ARTIFACT_task_id`;

-- AlterTable
ALTER TABLE `Artifact` MODIFY `task_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ProjectToArtifact` MODIFY `worktime` DOUBLE NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `Artifact_task_id_key` ON `Artifact`(`task_id`);

-- AddForeignKey
ALTER TABLE `Artifact` ADD CONSTRAINT `FK_ARTIFACT_task_id` FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
