-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "summary" TEXT,
    "review" TEXT,
    "isFavorite" BOOLEAN,
    "returnDate" DATETIME
);
INSERT INTO "new_Book" ("author", "id", "isFavorite", "isbn", "returnDate", "review", "summary", "title") SELECT "author", "id", "isFavorite", "isbn", "returnDate", "review", "summary", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
