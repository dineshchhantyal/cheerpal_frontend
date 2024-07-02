/*
  Warnings:

  - You are about to drop the column `reminderTypePreference` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_EventRecipients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToReminderType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventRecipients" DROP CONSTRAINT "_EventRecipients_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventRecipients" DROP CONSTRAINT "_EventRecipients_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventToReminderType" DROP CONSTRAINT "_EventToReminderType_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToReminderType" DROP CONSTRAINT "_EventToReminderType_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "reminderTypePreference";

-- DropTable
DROP TABLE "_EventRecipients";

-- DropTable
DROP TABLE "_EventToReminderType";

-- CreateTable
CREATE TABLE "EventRecipient" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventRecipientToReminderType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventRecipientToReminderType_AB_unique" ON "_EventRecipientToReminderType"("A", "B");

-- CreateIndex
CREATE INDEX "_EventRecipientToReminderType_B_index" ON "_EventRecipientToReminderType"("B");

-- AddForeignKey
ALTER TABLE "EventRecipient" ADD CONSTRAINT "EventRecipient_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRecipientToReminderType" ADD CONSTRAINT "_EventRecipientToReminderType_A_fkey" FOREIGN KEY ("A") REFERENCES "EventRecipient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRecipientToReminderType" ADD CONSTRAINT "_EventRecipientToReminderType_B_fkey" FOREIGN KEY ("B") REFERENCES "reminder_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
