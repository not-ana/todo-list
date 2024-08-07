/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Task` table. All the data in the column will be lost.
  - Added the required column `isCompleted` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Task_title_key";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "createdAt",
DROP COLUMN "status",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "Status";
