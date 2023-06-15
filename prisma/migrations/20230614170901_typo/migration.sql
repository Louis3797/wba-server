/*
  Warnings:

  - You are about to drop the column `plannedWorkingtTime` on the `Artifact` table. All the data in the column will be lost.
  - Added the required column `plannedWorkingTime` to the `Artifact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Artifact` DROP COLUMN `plannedWorkingtTime`,
    ADD COLUMN `plannedWorkingTime` DOUBLE NOT NULL;
