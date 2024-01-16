const BASE_URL = "https://todos-api.com/api/v1/todos";

export const fetchTodoList = async ({ token }) => {
  return (
    await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
};

export const createTodo = async ({ token, todo }) => {
  return (
    await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
  ).json();
};
