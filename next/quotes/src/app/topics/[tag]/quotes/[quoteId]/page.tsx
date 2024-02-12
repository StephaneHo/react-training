import CommentCreateForm from "@/components/comments/comment-create-form";
import QuoteShow from "@/components/quotes/quote-show";
import { paths } from "@/path";
import Link from "next/link";

import { fetchCommentsByQuoteId } from "@/db/queries/comments";
import CommentList from "@/components/comments/comment-list";

interface PostShowPageProps {
  params: {
    tag: string;
    quoteId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { tag, quoteId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(tag)}>
        {"< "}Back to {tag}
      </Link>
      <QuoteShow quoteId={quoteId} />
      <CommentCreateForm quoteId={quoteId} startOpen />
      <CommentList fetchData={() => fetchCommentsByQuoteId(quoteId)} />
    </div>
  );
}
