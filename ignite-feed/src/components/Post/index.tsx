import { Button } from "../Primitives/Button"
import { Input } from "../Primitives/Input"
import { Avatar } from "../User/Avatar"

export const Post = () => {
  return (
    <article className="bg-gray-800 p-10 rounded-lg">
      <header className="flex justify-between">
        <div className="flex gap-5">
          <Avatar
            src="https://github.com/nyyu.png"
            alt="User avatar"
            w={50}
            h={50}
          />
          <div className="flex flex-col">
            <strong>Nyyu</strong>
            <span>Dev Front-end</span>
          </div>
        </div>

        <time title="Feb, 03/2023 at 9pm" dateTime="2023-02-03 09:13:03">
          1 hour ago
        </time>
      </header>
      <main className="flex flex-col gap-6 mt-6">
        <p>
          Hey guys 👋
          <br />
          <br />
          Im Karen and Ive been working on an AI project called Karen Bot, it
          basically consists of a bot complaining 24/7 without stopping a single
          fraction of time. Good luck dealing with that! Love Yall
        </p>

        <a href="#">karenAiBot.dev/documentation</a>

        <div>
          <a href="#">#Karen</a>
          <a href="#">#ImTheBest</a>
          <a href="#">#AIBot</a>
        </div>
      </main>
      <hr className="border-0 border-t border-gray-600 my-6" />
      <footer className="flex flex-col gap-4">
        <strong className="font-bold">Leave your feedback</strong>
        <Input placeholder="ie. It looks awesome" />
        <Button className="max-w-[6.75rem]">Publish</Button>
      </footer>
    </article>
  )
}
