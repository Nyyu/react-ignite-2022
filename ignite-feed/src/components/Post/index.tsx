import { Button } from "../Primitives/Button"
import { Input } from "../Primitives/Input"
import { Avatar } from "../User/Avatar"
import { Comment } from "./Comment"

export const Post = () => {
  return (
    <article className="bg-gray-800 p-10 rounded-lg [&:not(:last-child)]:mb-8">
      <header className="flex justify-between">
        <div className="flex gap-5">
          <Avatar
            src="https://github.com/nyyu.png"
            alt="User avatar"
            w={50}
            h={50}
          />
          <div className="flex flex-col">
            <strong className="font-bold text-gray-100">Nyyu</strong>
            <span className="text-gray-400 text-sm">Dev Front-end</span>
          </div>
        </div>

        <time
          title="Feb, 03/2023 at 9pm"
          dateTime="2023-02-03 09:13:03"
          className="text-gray-400 text-sm"
        >
          1 hour ago
        </time>
      </header>
      <main className="flex flex-col gap-6 mt-6 font-normal text-base text-gray-300">
        <p>
          Hey guys 👋
          <br />
          <br />
          Im Karen and Ive been working on an AI project called Karen Bot, it
          basically consists of a bot complaining 24/7 without stopping a single
          fraction of time. Good luck dealing with that! Love Yall
        </p>

        <a href="#">karenAiBot.dev/documentation</a>

        <div className="flex gap-2">
          <a href="#">#Karen</a>
          <a href="#">#ImTheBest</a>
          <a href="#">#AIBot</a>
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
        <Comment
          comment="Poggers"
          date=""
          user={{
            name: "John doe",
          }}
          likes={12}
        />
      </div>
    </article>
  )
}
