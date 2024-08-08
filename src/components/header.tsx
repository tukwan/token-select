import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export const Header = () => (
  <header>
    <div className="flex items-center justify-between border border-slate rounded-full bg-black bg-opacity-30 px-2 sm:px-5 mx-4 mt-6 mb-2 sm:mx-8 sm:mt-8 py-2">
      <div className="flex justify-center items-center font-medium">
        <Image src="/logo.svg" alt="logo" width={48} height={48} priority />
        <h4 className="mx-2 text-lg sm:text-2xl sm:mr-8 lg:mr-9">
          Tokens
        </h4>
      </div>
      <div className="sm:transform-none transform scale-75">
        <ConnectButton showBalance={false} accountStatus="address" />
      </div>
    </div>
  </header>
)
