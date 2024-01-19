-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "returnDate" DATETIME NOT NULL
);
