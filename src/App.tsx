// import { useSuspenseQuery } from "@tanstack/react-query";
// import createToDoQueryOptions from "./queryOptions/createToDoQueryOptions";
import { Spin } from "antd";

import { Suspense } from "react";
import Card from "./component/Card";

function App() {
  // const { data, isPending } = useSuspenseQuery(createToDoQueryOptions());
  // console.log(data);

  return (
    <>
      {/* <div>{isPending ? <Spin /> : JSON.stringify(data[0]?.title)}</div> */}
      <Suspense fallback={<Spin />}>
        <Card />
      </Suspense>
    </>
  );
}

export default App;
