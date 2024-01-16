import React from "react";
import SnippetCreatePage from "../new/page";
import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div></div>
      <h1>{snippet.title}</h1>
      <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
      <form action={deleteSnippetAction}>
        <button>Delete</button>
      </form>
      <pre>{snippet.code}</pre>
    </div>
  );
}
