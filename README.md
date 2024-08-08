# Token Select

This application allows users to select a token and connect a browser wallet (such as MetaMask) on the Ethereum mainnet. Developed as an **Interview Assignment Project**, it enables users to view their token balances and choose a token to interact with.

## Live

- [https://token-select.vercel.app](https://token-select.vercel.app)

<img width="600" src="https://github.com/user-attachments/assets/f9eb723f-0dc3-422f-85c9-4933d93ad546">

## Features

- **Token Selection Interface**: User-friendly token selection button and modal.
- **Wallet Connection**: Connect a browser wallet using RainbowKit and wagmi.
- **Ethereum Balance Display**: Show user's balance for each token when the modal is open.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Design

Used the Ethena style for inspiration ([ethena.fi](https://ethena.fi)).

## Tech Stack

- **Next.js**: Framework for React applications with built-in support for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **RainbowKit**: Library for building a wallet connection interface.
- **Viem**: Ethereum library for building decentralized applications.
- **Wagmi**: React Hooks library for Ethereum.
- **TypeScript**: Typed JavaScript for better code quality and development experience.

## Getting Started

- `pnpm i && pnpm dev` (for development)
- `pnpm build && pnpm start` (for production)

## Environment Variables

Make sure to set up the following environment variables in a `.env` file:

```sh
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the GNU License. See the [LICENSE](LICENSE) file for details.
