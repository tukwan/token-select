import "@rainbow-me/rainbowkit/styles.css"
import "@/styles/global.scss"

import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Bai_Jamjuree } from "next/font/google"
import { Providers } from "@/components/providers"
import { Header } from "@/components/header"

const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: "Token Select",
  description: "Token Select App",
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  const wagmiCookie = cookies().get("wagmi.store")?.value ?? ""

  return (
    <html lang="en">
      <body className={`${baiJamjuree.className} antialiased`}>
        <Providers wagmiCookie={wagmiCookie}>
          <div className="layout-background-image min-h-screen flex flex-col">
            <div className="max-w-screen-2xl mx-auto w-full">
              <Header />
              <main className="flex flex-col items-center w-full">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
