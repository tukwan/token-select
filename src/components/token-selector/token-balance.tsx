import { useBalance } from "wagmi"
import type { Token } from "./token-constants"

type TokenBalanceProps = {
  token: Token
  address: `0x${string}` | undefined
  onSelect: () => void
}

export const TokenBalance = ({
  token,
  address,
  onSelect,
}: TokenBalanceProps) => {
  const { data: balance } = useBalance({
    address,
    token: token.address as `0x${string}`,
  })

  const balanceText = address
    ? balance
      ? parseFloat(balance.formatted).toFixed(4)
      : ""
    : "Not Connected"

  return (
    <div
      onClick={onSelect}
      className="flex justify-between items-center p-3 cursor-pointer hover:bg-iron transition ease-in-out -mx-6 px-6"
    >
      <div className="flex items-center">
        <img src={token.icon} alt={token.name} className="w-6 h-6 mr-3" />
        <div className="flex flex-col">
          <span className="text-white">{token.name}</span>
          <span className="text-gray-400 text-sm">{token.symbol}</span>
        </div>
      </div>
      <span className="text-white">{balanceText}</span>
    </div>
  )
}
