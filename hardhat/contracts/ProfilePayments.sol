// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract ProfilePayments {
    address payable private owner;

    bool public isStopped = false;

    uint transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        
    }

    TransferStruct[] transactions;

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

   fallback() external payable {}

   function withdraw(uint amount) external onlyOwner {
     (bool success, )  = owner.call{value: amount}("");
     require(success, "Transfer failed!");
   }

   function emergencyWithdraw() external onlyOwner onlyWhenStopped {
     (bool success, )  = owner.call{value: address(this).balance}("");
     require(success, "Transfer failed!");
   }

   function addToBlockchain(address payable receiver, uint amount, string memory message) public {
       transactionCount += 1;
       transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));
       emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
   }

   function getAllTransactions() public view returns (TransferStruct[] memory) {
       return transactions;

   }

   function getTransactionCount() public view returns(uint) {
       return transactionCount;

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

   function getBalance() external view returns(uint){
       return address(this).balance;
   }


   
}