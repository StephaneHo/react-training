/*
  Warnings:

  - Added the required column `introduction` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "introduction" TEXT NOT NULL
);
INSERT INTO "new_Book" ("id", "slug", "title") SELECT "id", "slug", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE UNIQUE INDEX "Book_slug_key" ON "Book"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
