// "use client";
// import dynamic from "next/dynamic";
// const Home = dynamic(() => import("./homepage"), { ssr: false });

// export default function page() {
//   return <Home />;
// }

import Home from "./homepage";

export default function Page() {
  return <Home />;
}

