import Image from "next/image"

interface AvatarProps {
  src: string
  alt?: string
  w?: number | undefined
  h?: number | undefined
}

export const Avatar = ({
  src,
  alt = "",
  h = undefined,
  w = undefined,
}: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={h}
      width={w}
      className="rounded-lg ring-2 ring-green-500 ring-offset-4 ring-offset-gray-800"
    />
  )
}
