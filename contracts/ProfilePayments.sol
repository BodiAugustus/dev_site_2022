// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract ProfilePayments {
address payable private owner;

   constructor(){
       setContractOwner(msg.sender);
   }

   function setContractOwner(address newOwner) private {
       owner = payable(newOwner);
       owner.transfer(12);
   }
   
}