import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Roboto } from "@next/font/google"
import { Header } from "../components/Header"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
