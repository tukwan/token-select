import { useBalance } from "wagmi"
import type { Token } from "./token-constants"

type Address = `0x${string}`

type TokenBalanceProps = {
  token: Token
  address: Address | undefined
  onSelect: () => void
}

export const TokenBalance = ({
  token,
  address,
  onSelect,
}: TokenBalanceProps) => {
  const { data: balance } = useBalance({
    address,
    token: token.address as Address,
  })

  const tokenBalance = formatTokenBalance(address, balance)

  return (
    <div
      onClick={onSelect}
      className="flex justify-between items-center px-6 py-3 cursor-pointer hover:bg-iron transition ease-in-out"
    >
      <div className="flex items-center">
        <img src={token.icon} alt={token.name} className="w-6 h-6 mr-3" />
        <div className="flex flex-col">
          <span className="text-white">{token.name}</span>
          <span className="text-gray-400 text-sm">{token.symbol}</span>
        </div>
      </div>
      <span className="text-white">{tokenBalance}</span>
    </div>
  )
}

const formatTokenBalance = (
  address: Address | undefined,
  balance: { formatted: string } | undefined
): string => {
  if (!address) return "Not Connected"
  if (!balance) return ""

  const formattedBalance = parseFloat(balance.formatted).toFixed(4)
  return formattedBalance === "0.0000" ? "0.0" : formattedBalance
}
