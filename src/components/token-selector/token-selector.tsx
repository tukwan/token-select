"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { TokenBalance } from "./token-balance"
import { TOKENS } from "./token-constants"
import type { Token } from "./token-constants"

export const TokenSelector = () => {
  const { address } = useAccount()
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (token: Token) => {
    setSelectedToken(token)
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="text-sm md:text-base font-medium transition ease-in-out px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg min-w-[134px] bg-black border border-slate text-white"
      >
        {selectedToken ? (
          <div className="flex items-center w-full">
            <img
              src={selectedToken.icon}
              alt={selectedToken.name}
              className="w-6 h-6 mr-2"
            />
            <span>{selectedToken.symbol}</span>
            <span className="mb-2 text-right flex-grow">⌄</span>
          </div>
        ) : (
          "Select Token"
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-onyx border-slate rounded-lg p-0 mt-8 sm:mt-0 gap-0">
          <DialogHeader className="p-6 pb-3 border-b border-b-slate">
            <DialogTitle className="text-xl font-bold">
              Select a Token
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose a token to continue
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
            {TOKENS.map((token) => (
              <TokenBalance
                key={token.symbol}
                token={token}
                address={address}
                onSelect={() => handleSelect(token)}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
