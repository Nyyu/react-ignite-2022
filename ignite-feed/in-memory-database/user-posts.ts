import dayjs from "dayjs"

import type { PostProps } from "../src/components/Post"

export const userPosts: PostProps[] = [
  {
    author: {
      name: "Nyyu",
      role: "Web developer",
      avatarUrl: "https://github.com/Nyyu.png",
    },
    content: [
      {
        type: "text",
        data: "Hey guys 👋",
      },
      {
        type: "text",
        data: "Im Karen and Ive been working on an AI project called Karen Bot, it basically consists of a bot complaining 24/7 without stopping a single fraction of time. Good luck dealing with that! Love y'all",
      },
      {
        type: "anchor",
        data: "karenAiBot.dev/documentation",
      },
    ],
    publishedAt: dayjs().subtract(2, "h").toDate(),
  },
  {
    author: {
      name: "Nyuu",
      role: "Web developer",
      avatarUrl: "https://github.com/nyuu.png",
    },
    content: [
      {
        type: "text",
        data: "Hey guys 👋",
      },
      {
        type: "text",
        data: "Im Karen and Ive been working on an AI project called Karen Bot, it basically consists of a bot complaining 24/7 without stopping a single fraction of time. Good luck dealing with that! Love y'all",
      },
      {
        type: "anchor",
        data: "karenAiBot.dev/documentation",
      },
    ],
    publishedAt: dayjs().subtract(4, "h").toDate(),
  },
]
