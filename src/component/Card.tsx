import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  createPostsQueryOptions,
  createUsersQueryOptions,
} from "../query/queries";
import { Spin } from "antd";

export default function Card() {
  const { data: users } = useSuspenseQuery(createUsersQueryOptions());

  const randomId = Math.floor(Math.random() * users.length);

  const { data: posts, isPending } = useQuery(
    createPostsQueryOptions(randomId)
  );

  console.log(
    JSON.stringify(
      posts
        ?.slice(0, 1)
        .map((post) => post.name)
        .join()
    )
  );
  return (
    <>
      <div>
        <h1>Card</h1>
        {isPending ? (
          <Spin />
        ) : (
          "Post Name: " +
          JSON.stringify(
            posts
              ?.slice(0, 1)
              .map((post) => post.name)
              .join()
          )
        )}
      </div>
    </>
  );
}
