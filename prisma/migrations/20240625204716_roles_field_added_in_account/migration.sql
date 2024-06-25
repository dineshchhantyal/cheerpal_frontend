-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[];
