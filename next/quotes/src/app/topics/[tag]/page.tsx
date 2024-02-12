import QuoteCreateForm from "@/components/quotes/quote-create-form";
import QuoteList from "@/components/quotes/quote-list";
import { fetchQuotesByTopicTag } from "@/db/queries/quotes";

type BookShowPageProps = {
  params: {
    tag: string;
  };
};
export default function TopicShowPage({ params }: BookShowPageProps) {
  const { tag } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-4">
        <h1 className="text-2xl font-bold mb-2">{params.tag} Quotes</h1>
        <QuoteList fetchData={() => fetchQuotesByTopicTag(tag)} />
      </div>

      <div>
        <QuoteCreateForm tag={tag} />
      </div>
    </div>
  );
}
