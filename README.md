# Sample Hardhat Project
AuctionNFT Contract
A decentralized auction platform for NFTs, supporting both direct listings and auctions. The contract allows creators to mint, list, and auction their NFTs, while users can bid, buy, and withdraw funds. The platform integrates KYC verification, authorization for trusted users, and uses the native token for payments. If listed items are not purchased by the end of the listing period, they automatically transition to an auction.

Features:
Mint and List NFTs: Creators can mint NFTs and list them for sale at a fixed price.
Automatic Auction Transition: If a listed item isn't sold within the set period, it is automatically converted into an auction, and the highest bidder wins the item.
Auctions: Users can create and participate in NFT auctions with a minimum bid, and place bids until the auction ends.
KYC & Authorization: Users must go through KYC verification before being authorized to interact with the platform.
Likes & Tips: Users can like auctions and send tips to creators.
Platform Fees: A fee is taken from sales and auction bids, supporting the platform's operation.
Key Structures:
Listing: Fixed-price sales of NFTs.
Auction: Time-bound auctions with minimum bid amounts.
Automatic Auction Creation: If a listed NFT isn't sold, it is automatically transferred to auction mode, where the highest bidder wins.
KYC: Ensures that only verified and authorized users can interact with certain platform features.
Smart Contract Details:

ERC721URIStorage for NFTs.
ERC20 (native token) for transactions.
Chainlink Price Feed for price data.
ReentrancyGuard to prevent reentrancy attacks.
Counters for tracking token, listing, and auction IDs.
Events:
Listing Created, Updated, and Sold.
Auction Created, New Highest Bid, Auction Ended (when transitioning from a listing).

If an NFT listed for a fixed price is not bought by the end of the listing period, the contract will automatically convert it into an auction.
Auction Logic: A minimum bid will be set, and users can place bids on the NFT.
Refunding Bidders: If the auction is won by the highest bidder, all other bidders will have their funds automatically refunded.
Auction Winner: The highest bidder at the auction's end will receive the NFT.

Tip Sent and KYC Verified events.
Future DAO Integration:
In the future, the platform will include a DAO to allow the community to vote on important decisions such as listing fees, platform updates, and governance features. This will enable greater decentralization and community-driven decision-making.

Installation & Deployment:
Install Dependencies:

npm install @openzeppelin/contracts
npm install @chainlink/contracts
npm install hardhat
Deploy to Morph Layer 2 Testnet: Using Hardhat, deploy the contract to the Morph Layer 2 Testnet. Make sure to configure your Hardhat environment with the correct settings for the testnet (RPC URL, wallet key, etc.).

require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.24",
  networks: {
    morphTestnet: {
      url: "https://rpc-morph-layer2-testnet.io", // replace with actual testnet RPC URL
      accounts: ["<your_private_key>"],
    },
  },
};


Run Deployment:

npx hardhat run scripts/deploy.js --network morphTestnet
Contract Address:
Once deployed, the contract will have a unique address on the Morph Layer 2 testnet, which can be used to interact with the contract through your front-end or any Web3-compatible interface.


This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
