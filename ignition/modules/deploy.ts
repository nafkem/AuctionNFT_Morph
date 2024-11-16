

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AuctionNFTModule = buildModule("AuctionNFTModule", (m: any) => {
 
  // Deploy LanSeller with token address and price feed
  const auctionToken = m.contract("AuctionToken");
  //const verifier = m.contract("Verifier");
  const auctionNFT = m.contract("AuctionNFT", [auctionToken]);

  return { auctionToken,auctionNFT };
});

export default AuctionNFTModule;