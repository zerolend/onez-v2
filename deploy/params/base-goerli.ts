import { ZERO_ADDRESS } from "../../utils/base/BaseHelper";
import { IParams } from "../../utils/base/interfaces";

const params: IParams = {
  RPC_URL: "http://127.0.0.1:8011",
  COLLATERALS: [
    {
      address: ZERO_ADDRESS,
      symbol: "WETH",
      decimals: 18,
      interestRateInBps: "0",
      capacityE18: "10000000000000000000000000", // 100 mil mint
      testnetPriceE8: 1800 * 1e8,
    },
    {
      address: ZERO_ADDRESS,
      chainlinkOracleScale: 12,
      symbol: "USDC",
      decimals: 6,
      interestRateInBps: "0",
      capacityE18: "10000000000000000000000000", // 100 mil mint
      testnetPriceE8: 1 * 1e8,
    },
  ],
  PYTH_ADDRESS: ZERO_ADDRESS,
  ONEZ: ZERO_ADDRESS,
  LAYERZERO_ENDPOINT: ZERO_ADDRESS,
  LENDING_POOL_ADDRESS: ZERO_ADDRESS,
  ADMIN_ADDRESS: "0xbCAdea1832101cd745d950898C163a5d2D7c597a",
  DEPLOYER_ADDRESS: "0xbCAdea1832101cd745d950898C163a5d2D7c597a",
  OUTPUT_FILE: "./output/base-goerli.json",
  GAS_PRICE: 5 * 1000000000, // 5.1 gwei
  TX_CONFIRMATIONS: 0,
  MIN_NET_DEBT: 200,
  GAS_COMPENSATION: 10,
  ETHERSCAN_BASE_URL: "https://goerli.basescan.org",
  NETWORK_NAME: "hardhat-local",
};

export default params;
