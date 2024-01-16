import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <div>
        <h1>Snippets</h1>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
