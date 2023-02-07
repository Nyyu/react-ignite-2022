import { GetServerSideProps } from "next"
import Head from "next/head"

import { Sidebar } from "../components/Sidebar"
import { Post, PostProps } from "../components/Post"

import { useQuery } from "@tanstack/react-query"
import { v4 as uuid } from "uuid"
import { api } from "../services/api"

const handleGetPosts = async (): Promise<PostProps[]> => {
  const posts = await api.get("http://localhost:3000/api/users/posts")
  return posts?.data ?? []
}

export default function Home({ posts = [] }) {
  const {
    data = [],
    isFetching,
    isError,
  } = useQuery<PostProps[]>({
    queryKey: ["posts"],
    queryFn: handleGetPosts,
    initialData: posts,
  })

  if (isFetching) {
    return (
      <div className="w-auto mx-auto max-w-[70rem] m-8 px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start h-72">
        <aside className="rounded-lg  h-full animate-pulse bg-gradient-to-b from-gray-800  to-transparent"></aside>
        <main className="flex flex-col rounded-lg  h-full animate-pulse bg-gradient-to-b from-gray-800  to-transparent"></main>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-auto mx-auto max-w-[70rem] m-8 px-4 grid grid-cols-1 gap-8 items-center place-items-center h-[calc(100vh-15rem)]">
        An error ocurred...
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Feed</title>
      </Head>
      <div className="w-auto mx-auto max-w-[70rem] m-8 px-4 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main className="flex flex-col">
          {data.map((post) => (
            <Post
              key={uuid()}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              hashtags={["AIBot", "Art"]}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await api.get("http://localhost:3000/api/users/posts")

  return {
    props: {
      posts: posts.data,
    },
  }
}
