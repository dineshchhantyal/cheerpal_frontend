/*
  Warnings:

  - You are about to drop the `ReminderType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToReminderType" DROP CONSTRAINT "_EventToReminderType_B_fkey";

-- DropTable
DROP TABLE "ReminderType";

-- CreateTable
CREATE TABLE "reminder_types" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reminder_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventRecipients" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "reminder_types_type_key" ON "reminder_types"("type");

-- CreateIndex
CREATE UNIQUE INDEX "_EventRecipients_AB_unique" ON "_EventRecipients"("A", "B");

-- CreateIndex
CREATE INDEX "_EventRecipients_B_index" ON "_EventRecipients"("B");

-- AddForeignKey
ALTER TABLE "_EventToReminderType" ADD CONSTRAINT "_EventToReminderType_B_fkey" FOREIGN KEY ("B") REFERENCES "reminder_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRecipients" ADD CONSTRAINT "_EventRecipients_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRecipients" ADD CONSTRAINT "_EventRecipients_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
