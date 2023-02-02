import Link from "next/link"

export const Sidebar = () => {
  return (
    <aside className="rounded-lg overflow-hidden bg-gray-800">
      <picture>
        <img
          className="w-full h-[4.5rem] object-cover object-top"
          src="https://raw.githubusercontent.com/Nyyu/Nyyu/main/img/wallhaven-8393gy.jpg"
          alt="Banner picture"
        />
      </picture>

      <div className="flex flex-col items-center">
        <strong>Ny</strong>
        <span>Web Developer</span>
      </div>

      <footer className="border-t border-gray-600 mt-6 pt-6 pb-8 px-8">
        <Link
          href="#"
          className="w-full text-green-500 rounded-lg h-[3.13rem] font-bold bg-transparent border-green-500 border px-6 no-underline flex justify-center items-center"
        >
          Edit profile
        </Link>
      </footer>
    </aside>
  )
}
