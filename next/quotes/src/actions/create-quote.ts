"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/path";
import { Quote } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";
const createQuoteSchema = z.object({
  content: z.string().min(10),
});

type CreateQuoteFormState = {
  errors: {
    content?: string[];
    _form?: string[];
  };
};
export async function createQuote(
  tag: string,
  formState: CreateQuoteFormState,
  fromData: FormData
): Promise<CreateQuoteFormState> {
  const result = createQuoteSchema.safeParse({
    content: fromData.get("content"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be logged to be signed in to do this"],
      },
    };
  }

  const topic = await db.topic.findFirst({
    where: { tag },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find topic"],
      },
    };
  }
  let quote: Quote;
  try {
    quote = await db.quote.create({
      data: {
        content: result.data.content,
        topicId: topic.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create quote"],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(tag));
  redirect(paths.quoteShow(tag, quote.id));
}
