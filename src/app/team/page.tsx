import { Suspense } from "react";

const getTodos = async () => {
  // throw new Error("Something went wrong while fetching todos...");
  await wait(2000);
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
};

export default function TeamPage() {
  return (
    <div>
      <h1>Team page</h1>
      <Suspense fallback={"loading from suspense..."}>
        <Todos />
      </Suspense>
    </div>
  );
}

const Todos = async () => {
  const todos = await getTodos();

  return <p>We have {todos.length} todos</p>;
};

const wait = async (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
