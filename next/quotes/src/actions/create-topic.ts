"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/path";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { z } from "zod";
type MessageType = {
  errors: {
    name?: string[];
    _form?: string[];
  };
};
const createQuoteSchema = z.object({
  name: z.string().min(3),
});

export async function createTopic(
  formState: MessageType,
  formData: FormData
): Promise<MessageType> {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  let topic: Topic;
  const name = formData.get("name");

  const result = createQuoteSchema.safeParse({
    name,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["you must be signed to do this"],
      },
    };
  }

  try {
    topic = await db.topic.create({
      data: {
        tag: slugify(result.data.name),
        name: result.data.name,
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
          _form: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/");
  redirect(paths.topicShow(topic.tag));
}
