import { db } from "@/db";
import { notFound } from "next/navigation";

type QuoteShowProps = {
  quoteId: string;
};

export default async function QuoteShow({ quoteId }: QuoteShowProps) {
  const quote = await db.quote.findFirst({ where: { id: quoteId } });

  if (!quote) {
    notFound();
  }
  return (
    <div className="m-4">
      <p className="p-4 border rounded">{quote.content}</p>
    </div>
  );
}
