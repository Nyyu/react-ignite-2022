import Image from "next/image"
import Link from "next/link"

import IgniteLogo from "@/assets/ignite-logo.svg"

export const Header = () => {
  return (
    <header className="flex items-center justify-center py-5 gap-2 bg-gray-800">
      <Image src={IgniteLogo} alt="Ignite" className="w-auto max-h-8" />
      <Link href={"/"}>
        <strong>Ignite Feed</strong>
      </Link>
    </header>
  )
}
