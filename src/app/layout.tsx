import "@rainbow-me/rainbowkit/styles.css"
import "@/styles/global.scss"

import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Bai_Jamjuree } from "next/font/google"
import { Providers } from "@/components/providers"
import { Header } from "@/components/header"

const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: "Coin Select",
  description: "Coin Select app",
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  const wagmiCookie = cookies().get("wagmi.store")?.value ?? ""

  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.className} antialiased flex h-fit min-h-screen flex-col max-w-[calc(100vw - 0px] layout-background-image`}
      >
        <Providers wagmiCookie={wagmiCookie}>
          <Header />
          <div className="">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
