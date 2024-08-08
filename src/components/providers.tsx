"use client"

import { WagmiProvider, cookieToInitialState } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"
import { configWagmi } from "@/config/wagmi"

const queryClient = new QueryClient()

type Props = {
  wagmiCookie: string
  children: React.ReactNode
}

export function Providers({ children, wagmiCookie }: Props) {
  const initialWagmiState = cookieToInitialState(configWagmi, wagmiCookie)

  return (
    <WagmiProvider config={configWagmi} initialState={initialWagmiState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={darkTheme({
            accentColor: "#e5e7eb",
            accentColorForeground: "#000",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
