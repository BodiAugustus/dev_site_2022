// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payments {
    uint256 transactionCounter;

    event Payment(address from, address to, uint amount, string message, uint timestamp);

    struct PaymentStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
    } 
}