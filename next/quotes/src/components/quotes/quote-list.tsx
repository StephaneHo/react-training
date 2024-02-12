import Link from "next/link";

import { QuoteWithData } from "@/db/queries/quotes";
import { paths } from "@/path";

type QuoteListProps = {
  fetchData: () => Promise<QuoteWithData[]>;
};
// TODO: Get list of posts into this component somehow
export default async function QuoteList({ fetchData }: QuoteListProps) {
  const quotes = await fetchData();
  const renderedPosts = quotes.map((quote) => {
    const topicTag = quote.topic.tag;

    if (!topicTag) {
      throw new Error("Need a tag to link to a quote");
    }

    return (
      <div key={quote.id} className="border rounded p-2">
        <Link href={paths.quoteShow(topicTag, quote.id)}>
          <h3 className="text-lg font-bold">{quote.content}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {quote.authorId}</p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
