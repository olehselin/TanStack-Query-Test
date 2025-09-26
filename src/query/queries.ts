import { queryOptions } from "@tanstack/react-query";
import type { ToDo } from "./types/ToDo";
import type { Posts } from "./types/Posts";
import type { Users } from "./types/Users/Users";

export function createToDoQueryOptions() {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

export function createPostsQueryOptions(randomId: number) {
  return queryOptions({
    queryKey: ["posts", randomId],
    queryFn: () => getPosts(randomId),
  });
}

export function createUsersQueryOptions() {
  return queryOptions({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}

const getTodos = async (): Promise<ToDo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const responce1 = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   console.log(responce);
  return responce1.json();
};

export const getPosts = async (id: number): Promise<Posts[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const responce2 = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  //   console.log(responce);
  return responce2.json();
};

const getUsers = async (): Promise<Users[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const responce3 = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(responce);
  return responce3.json();
};
