/*
  Warnings:

  - You are about to drop the `reminder_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToReminderType" DROP CONSTRAINT "_EventToReminderType_B_fkey";

-- DropTable
DROP TABLE "reminder_types";

-- CreateTable
CREATE TABLE "ReminderType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReminderType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ReminderType_type_key" ON "ReminderType"("type");

-- AddForeignKey
ALTER TABLE "_EventToReminderType" ADD CONSTRAINT "_EventToReminderType_B_fkey" FOREIGN KEY ("B") REFERENCES "ReminderType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
