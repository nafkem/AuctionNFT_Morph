// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AuctionToken is ERC20 {
    constructor() ERC20("AuctionToken", "AUCTKN") {
        _mint(msg.sender, 1000000 * 10 ** (decimals()));
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}