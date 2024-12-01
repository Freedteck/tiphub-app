![Screenshot 2024-12-01 130011](https://github.com/user-attachments/assets/d3d22964-a6cc-4f8f-a6c0-a2e4629d5f96)# TipHub: Rewarding Developers for Sharing Knowledge

## 🚀 Purpose
TipHub is a revolutionary platform designed to reward developers for sharing valuable knowledge and resources. Our mission is to create a collaborative ecosystem where developers can:

- Share code snippets, tutorials, and technical solutions
- Earn USDe tips for high-quality contributions
- Connect with a community of passionate tech professionals

## 💡 Key Features
🔍 Resource Sharing: Upload and discover code snippets, tutorials, and technical solutions
💰 Reward System: Earn USDe tips for valuable contributions

## 💻 Getting Started
  ### Prerequisites
  1. Ethereum-compatible wallet (MetaMask, WalletConnect, etc.)
  2. Basic understanding of web3 technologies

   #### Wallet Connection
  1. Visit [TipHub App](https://tiphub-phi.vercel.app/)
  2. Click "Connect Wallet"![Screenshot 2024-12-01 125155](https://github.com/user-attachments/assets/999bbf9a-33e4-4365-9b9d-1583fc9d272d)

  3. Select your preferred wallet provider ![Screenshot 2024-12-01 125357](https://github.com/user-attachments/assets/c17edcc0-4866-429a-a2ed-7f8eb9e4772e)

  4. Sign the connection request

  #### To Contribute Resources
  1. Connect your wallet
  2. Navigate to "Resources"![Screenshot 2024-12-01 125558](https://github.com/user-attachments/assets/d8b2cbd6-05ba-4a42-a8ef-a648884dc385)

  3. Click on create
  4. Fill in resource details ( Title, link, description)![Screenshot 2024-12-01 125735](https://github.com/user-attachments/assets/78d87b5a-8ffb-49d3-b231-a212a50507b2)

  5. Sign the transaction to publish
  #### Tipping
  1. Browse resources
  2. Find a valuable contribution
  3. Click "Send a Tip" button![Screenshot 2024-12-01 130011](https://github.com/user-attachments/assets/bde21b4d-b73d-4c5e-9ad5-59c826d65522)

  4. Confirm USDe tip amount![Uploading Screenshot 2024-12-01 130631.png…]()


  5. Complete the transaction

  ## 💸 Economic Model

  - Accessing resources is free
  - Tipping and contributions require gas fees
  - Tips are processed in USDe, Ethena's stable asset

## USDe Vision
TipHub believes in USDe as a core asset for the Internet Economy, extending beyond DeFi to payments, social networks, and innovative platforms.
##  Future Roadmap and Improvements
#### Making Crypto Accessible: Account Abstraction (AA) Initiatives
  We're committed to lowering barriers to entry for non-crypto-native developers through innovative features:
  1. Simplified Onboarding
      Gasless Transactions: Implement Account Abstraction (AA) to:
       - Allow users to create and use accounts without upfront ETH for gas
       - Sponsor initial transactions for new users
       - Enable email or social media sign-ups with embedded wallets

 2. Web3 Education Hub
    Learning Pathways: Integrated educational resources to help developers:
    - Understand blockchain basics
    - Learn about cryptocurrency and web3 technologies
    - Navigate wallet management and transactions

3. User-Friendly Crypto Interactions
    Simplified Tipping Mechanism:
   - Fiat on-ramp integrations
   - One-click USDe top-up
   - Clear gas fee estimations and explanations

4. Inclusive Design Features
    Wallet Abstraction:
    - Multi-chain support
    - Easy wallet recovery options
    - Intuitive interface for managing crypto assets


Why These Improvements Matter
- Make web3 technologies more approachable, a win here is also a win for ethena
- better improve use and utilization of USDe
- Empower developers of all skill levels
- Create a truly inclusive platform for technical knowledge exchange

## 🔧 Development
Powered by Scaffold-ETH 2, our platform offers:

Hot Contract Reloading
Custom Web3 Hooks
Wallet Provider Integrations
Local Development Environment


🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contracts in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
