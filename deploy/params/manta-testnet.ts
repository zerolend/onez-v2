import { ZERO_ADDRESS } from "../../utils/base/BaseHelper";
import { IParams } from "../../utils/base/interfaces";

const params: IParams = {
  RPC_URL: "https://manta-testnet.calderachain.xyz/http",
  COLLATERALS: [
    // {
    //   address: "0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF",
    //   symbol: "WETH",
    //   decimals: 18,
    //   interestRateInBps: "0",
    //   pythId:
    //     "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
    //   capacityE18: "10000000000000000000000000", // 100 mil mint
    //   testnetPriceE8: 1800 * 1e8,
    // },
    {
      address: ZERO_ADDRESS,
      symbol: "MANTA",
      decimals: 18,
      interestRateInBps: "0",
      pythId:
        "0x67c68ce90695fc069790a369938f2349ccfbbec6ae6125f68f20b6a2015193ad",
      capacityE18: "10000000000000000000000000", // 100 mil mint
      testnetPriceE8: 180 * 1e8,
    },
  ],
  PYTH_ADDRESS: "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c",
  ONEZ: "0xF876047815394dF2d8f8997a094Eaff6055C7044",
  LENDING_POOL_ADDRESS: ZERO_ADDRESS,
  LAYERZERO_ENDPOINT: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8",
  ADMIN_ADDRESS: "0x5314BaA61AC841AF28bAECCAe9C55B09c7A23DB9",
  DEPLOYER_ADDRESS: "0x5314BaA61AC841AF28bAECCAe9C55B09c7A23DB9",
  OUTPUT_FILE: "./output/manta-testnet.json",
  GAS_PRICE: 0.5 * 1000000000, // 0.3 gwei
  TX_CONFIRMATIONS: 3,
  ETHERSCAN_BASE_URL: "https://pacific-explorer.testnet.manta.network",
  NETWORK_NAME: "manta-testnet",
  MIN_NET_DEBT: 2,
  GAS_COMPENSATION: 10,
};

export default params;
