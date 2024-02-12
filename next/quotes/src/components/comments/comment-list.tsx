import CommentShow from "@/components/comments/comment-show";
import { CommentWithUserData } from "@/db/queries/comments";

type CommentListProps = {
  fetchData: () => Promise<CommentWithUserData[]>;
};

export default async function CommentList({ fetchData }: CommentListProps) {
  const comments = await fetchData();

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    console.log("commentId", comment.id);
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        comments={comments}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
