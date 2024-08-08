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
        className="bg-mist text-sm md:text-base font-medium text-black transition ease-in-out hover:bg-gray-50 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg"
      >
        {selectedToken ? (
          <div className="flex items-center">
            <img
              src={selectedToken.icon}
              alt={selectedToken.name}
              className="w-6 h-6 mr-2"
            />
            <span>{selectedToken.symbol}</span>
            <span className="ml-2 mb-2">⌄</span>
          </div>
        ) : (
          "Select Token"
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-onyx border-slate rounded-lg p-6 pb-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Select a Token
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose a token to continue
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
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
