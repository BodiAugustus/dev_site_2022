// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract ProfilePayments {
address payable private owner;

bool public isStopped = false;

   constructor(){
       setContractOwner(msg.sender);
   }

///Only the contract owner has access.
   error OnlyOwner();

   modifier onlyOwner(){
       if(msg.sender != getContractOwner()){
        revert OnlyOwner();
       }
       _;
   }

   modifier onlyWhenNotStopped {
       require(!isStopped);
       _;
   }

   function stopContract() external onlyOwner {
       isStopped = true;
   }

   function resumeContract() external onlyOwner {
       isStopped = false;
   }

   function transferOwnership(address newOwner) external onlyOwner {
       setContractOwner(newOwner);
   }

   function getContractOwner() public view returns(address){
   return owner;

   }

   function setContractOwner(address newOwner) private {
       owner = payable(newOwner);    
   }
   
}