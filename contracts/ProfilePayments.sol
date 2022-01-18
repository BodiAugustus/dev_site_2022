// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract ProfilePayments {
address payable private owner;

   constructor(){
       setContractOwner(msg.sender);
   }

   function transferOwnership(address newOwner) external {
       setContractOwner(newOwner);
   }

   function getContractOwner() public view returns(address){
   return owner;

   }

   function setContractOwner(address newOwner) private {
       owner = payable(newOwner);    
   }
   
}