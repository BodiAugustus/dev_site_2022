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

   modifier onlyWhenStopped {
       require(isStopped);
       _;
   }

   receive() external payable {}

   function withdraw(uint amount) external onlyOwner {
     (bool success, )  = owner.call{value: amount}("");
     require(success, "Transfer failed!");
   }

   function emergencyWithdraw() external onlyOwner onlyWhenStopped {
     (bool success, )  = owner.call{value: address(this).balance}("");
     require(success, "Transfer failed!");
   }

   function selfDestruct() external onlyWhenStopped onlyOwner {
       selfdestruct(owner);
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