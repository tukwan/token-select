export type Token = (typeof TOKENS)[number]

export const TOKENS = [
  {
    symbol: "stETH",
    name: "Staked ETH",
    address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    icon: "/tokens/steth.png",
  },
  {
    symbol: "rETH",
    name: "Rocket Pool ETH",
    address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
    icon: "/tokens/reth.png",
  },
  {
    symbol: "cbETH",
    name: "Coinbase Wrapped Staked ETH",
    address: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
    icon: "/tokens/cbeth.png",
  },
  {
    symbol: "wbETH",
    name: "Wrapped Beacon ETH",
    address: "0xa2E3356610840701BDf5611a53974510Ae27E2e1",
    icon: "/tokens/wbeth.png",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    icon: "/tokens/usdc.png",
  },
  {
    symbol: "USDT",
    name: "Tether",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    icon: "/tokens/usdt.png",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    icon: "/tokens/dai.png",
  },
  { symbol: "ETH", name: "Ethereum", address: "", icon: "/tokens/eth.png" },
  {
    symbol: "WETH",
    name: "Wrapped ETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    icon: "/tokens/weth.png",
  },
]
