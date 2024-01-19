"use client";

import React from "react";

import { useFormState } from "react-dom";
import { addBook } from "@/actions/action";

export default function NewBookPage() {
  const [formState, action] = useFormState(addBook, { message: "" });
  return (
    <>
      <div>Ajouter un livre emprunte</div>
      <div>Resume</div>
      <div>Mes impressions </div>
      <form action={action}>
        <h3 className="font-bold m-3">Ajouter un livre</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              isbn
            </label>
            <textarea
              name="isbn"
              className="border rounded p-2 w-full"
              id="isbn"
            />
          </div>
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              auteur.autrice
            </label>
            <textarea
              name="author"
              className="border rounded p-2 w-full"
              id="author"
            />
          </div>

          {formState.message ? (
            <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
              {formState.message}
            </div>
          ) : null}

          <button type="submit" className="rounded p-2 bg-blue-200">
            Ajouter le livre
          </button>
        </div>
      </form>
    </>
  );
}
