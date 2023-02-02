import Head from "next/head"

import { Sidebar } from "../components/Sidebar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignite Feed</title>
      </Head>
      <div className="w-auto mx-auto max-w-[70rem] m-8 px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main className="">Main</main>
      </div>
    </>
  )
}
