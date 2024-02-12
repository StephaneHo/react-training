import { db } from "@/db";
import { Comment } from "@prisma/client";
export type CommentWithUserData = Comment & {
  user: { name: string | null; image: string | null };
};

export function fetchCommentsByQuoteId(
  quoteId: string
): Promise<CommentWithUserData[]> {
  return db.comment.findMany({
    where: { quoteId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
