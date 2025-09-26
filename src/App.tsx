// import { useSuspenseQuery } from "@tanstack/react-query";
import { Spin } from "antd";

import { Suspense } from "react";
import Card from "./component/Card";
import { useQueries } from "@tanstack/react-query";
import {
  createPostsQueryOptions,
  createToDoQueryOptions,
  createUsersQueryOptions,
} from "./query/queries";

function App() {
  const [{data}, result2, result3] = useQueries({
    queries: [createToDoQueryOptions(), createPostsQueryOptions(),createUsersQueryOptions()],
  });

  return (
    <>
      <Suspense fallback={<Spin />}>
        <Card />
      </Suspense>
    </>
  );
}

export default App;
