"use server";

export async function createBook(formData: FormData) {
  const title = formData.get("title");
  const introduction = formData.get("description");
}
