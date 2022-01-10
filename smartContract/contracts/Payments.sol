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

    PaymentStruct[] payments; 

    function addToChain(address payable receiver, uint amount, string memory message) public {
        transactionCounter += 1;
        payments.push(PaymentStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Payment(msg.sender, receiver, amount, message, block.timestamp); 
    }

    function getAllTxs() public view returns(PaymentStruct[] memory) {
       return payments;
    }

    function getTXCount() public view returns(uint) {
        return transactionCounter;

    }
}