import { queryOptions } from "@tanstack/react-query";

export default function createToDoQueryOptions() {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

const getTodos = async (): Promise<ToDo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
//   console.log(responce);
  return responce.json();
};

type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
