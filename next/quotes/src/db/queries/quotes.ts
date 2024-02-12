import { Quote } from "@prisma/client";
import { db } from "@/db";

export type QuoteWithData = Quote & {
  topic: { tag: string };
};

export function fetchQuotesByTopicTag(tag: string): Promise<QuoteWithData[]> {
  return db.quote.findMany({
    where: { topic: { tag } },
    include: {
      topic: { select: { tag: true } },
    },
  });
}
