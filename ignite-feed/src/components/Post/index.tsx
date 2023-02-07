import dayjs from "dayjs"
import { v4 as uuid } from "uuid"

import { Button } from "../Primitives/Button"
import { Input } from "../Primitives/Input"
import { Avatar } from "../User/Avatar"
import { Comment } from "./Comment"

export interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: { type: "text" | "anchor"; data: string }[]
  hashtags?: string[]
  publishedAt: Date
}

export const Post = ({
  author: { name, role, avatarUrl },
  content,
  hashtags = [],
  publishedAt,
}: PostProps) => {
  const dateWithSuffix = dayjs().to(dayjs(publishedAt))

  return (
    <article className="bg-gray-800 p-10 rounded-lg [&:not(:last-child)]:mb-8">
      <header className="flex justify-between">
        <div className="flex gap-5">
          <Avatar src={avatarUrl} alt="User avatar" w={50} h={50} />
          <div className="flex flex-col">
            <strong className="font-bold text-gray-100">{name}</strong>
            <span className="text-gray-400 text-sm">{role}</span>
          </div>
        </div>

        <time
          title="Feb, 03/2023 at 9pm"
          dateTime="2023-02-03 09:13:03"
          className="text-gray-400 text-sm"
        >
          {dateWithSuffix}
        </time>
      </header>
      <main className="flex flex-col gap-6 mt-6 font-normal text-base text-gray-300">
        {content.map((shard) =>
          shard.type === "text" ? (
            <p key={uuid()}>{shard.data}</p>
          ) : (
            <a href="#" key={uuid()}>
              {shard.data}
            </a>
          )
        )}

        <div className="flex gap-2">
          {hashtags.map((hashtag) => (
            <a href="#" key={uuid()}>
              #{hashtag}
            </a>
          ))}
        </div>
      </main>
      <hr className="border-0 border-t border-gray-600 my-6" />
      <form className="flex flex-col gap-4 group">
        <strong className="font-bold">Leave your feedback</strong>
        <Input placeholder="ie. It looks awesome" className="resize-none" />
        <Button className="max-w-[6.75rem] invisible max-h-0 group-focus-within:visible group-focus-within:max-h-[none]">
          Publish
        </Button>
      </form>

      <div className="mt-8 flex flex-col gap-6">
        <Comment
          comment="Poggers that looks sick, just like my neighbors"
          date=""
          user={{
            name: "Nyyu",
          }}
          likes={4}
        />
      </div>
    </article>
  )
}
