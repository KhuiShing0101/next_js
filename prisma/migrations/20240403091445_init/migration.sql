-- CreateTable
CREATE TABLE "Poste" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Poste_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Poste" ADD CONSTRAINT "Poste_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
