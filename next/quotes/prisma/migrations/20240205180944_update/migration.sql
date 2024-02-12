/*
  Warnings:

  - You are about to drop the column `slug` on the `Topic` table. All the data in the column will be lost.
  - Added the required column `tag` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tag" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Topic" ("id", "name") SELECT "id", "name" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE UNIQUE INDEX "Topic_tag_key" ON "Topic"("tag");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
