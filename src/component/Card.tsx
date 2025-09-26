import { useSuspenseQuery } from "@tanstack/react-query";

import createToDoQueryOptions from "../queryOptions/createToDoQueryOptions";

export default function Card() {

    const {data} = useSuspenseQuery(createToDoQueryOptions())

  return (
    <>
      <div>
        <h1>Card</h1>
        {JSON.stringify(data?.slice(0, 10))}
      </div>
    </>
  );
}
