import { defineChain } from "viem";

// USDE chain
export const ble = defineChain({
  id: 52085143,
  name: "BleTestnet",
  nativeCurrency: { name: "Ble Testnet", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.ethena.fi"],
    },
  },
  blockExplorers: {
    default: {
      name: "BleScan",
      url: "https://testnet.explorer.ethena.fi/",
    },
  },
});
