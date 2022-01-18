
const { isTargetLikeServerless } = require("next/dist/server/config")

const { catchRevert } = require("./utils/exceptions")

const ProfilePayments = artifacts.require("ProfilePayments")

const getBalance = async address => web3.eth.getBalance(address)
const toBN = value => web3.utils.toBN(value)


const getGas = async (result) => {
    const tx = await web3.eth.getTransaction(result.tx)
    const gasUsed = toBN(result.receipt.gasUsed)
    const gasPrice = toBN(tx.gasPrice)
    const gas = gasUsed.mul(gasPrice)

    return gas
}

contract("ProfilePayments", accounts => {
    let _contract = null
    let contractOwner = null
    let sender = null

    
    
    before( async ()=> {
        _contract = await ProfilePayments.deployed()
        contractOwner = accounts[0]
        sender = accounts[1]

        console.log(contractOwner);
        console.log(_contract);
    })

    describe("Testing transfer ownership", () => {
        let currentOwner = null
        before(async() => {
           currentOwner = await _contract.getContractOwner()
        })

        it("getContractOwner should return the deployer address", async () => {
            assert.equal(contractOwner, currentOwner, "Current contract owner does not match the registered contract owner.")
        })

        it("Should not transfer ownership whenever owner is not sending this transaction", async () => {
            await catchRevert(_contract.transferOwnership(accounts[3], {from: accounts[4]}))
        })

        it("should transfer ownership to third address from 'accounts'", async () => {
            await _contract.transferOwnership(accounts[2], {from: currentOwner})
            const owner = await _contract.getContractOwner()
            assert.equal(owner, accounts[2], "Current owner is not the correct account")
        })

        it("should transfer ownership back to initial contract owner", async () => {
            await _contract.transferOwnership(contractOwner, {from: accounts[2]})
            const owner = await _contract.getContractOwner()
            assert.equal(owner, contractOwner, "Contract owner is not set!")
        })
    })

    describe("Receive funds", () => {

        it("should have transacted funds", async () => {
        
          const value = "100000000000000000"
          const contractBeforeTx = await getBalance(_contract.address)
    
          await web3.eth.sendTransaction({
            from: sender,
            to: _contract.address,
            value
          })
    
          const contractAfterTx = await getBalance(_contract.address)
    
          assert.equal(
            toBN(contractBeforeTx).add(toBN(value)).toString(),
            contractAfterTx,
            "Value after transaction is not matching!"
          )
    
        })
      })

      describe("Normal withdraw", () => {
          const fundsToDeposit = "100000000000000000"
          const overLimitFunds = "100000000000000000000000"

          before(async() => {
            await web3.eth.sendTransaction({
                from: sender,
                to: _contract.address,
                value: fundsToDeposit
              })
          })

          it("Should fail when withdrawal attempted with non-owner address", async() => {
              const value = "10000000000000000"
              await catchRevert(_contract.withdraw(value, {from: sender}))
          })

          it("Should fail when withdrawal is over the available balance.", async() => {
              const currentOwner = await _contract.getContractOwner()
              await catchRevert(_contract.withdraw(overLimitFunds, {from: currentOwner}))
          })

          it("Should have +0.1 Ether after withdrawal.", async() => {
              const currentOwner = await _contract.getContractOwner()
              const ownerBalance = await getBalance(currentOwner)
              const result = await _contract.withdraw(fundsToDeposit, {from: currentOwner})
              const newOwnerBalance = await getBalance(currentOwner)
              const gas = await getGas(result)

              assert.equal(toBN(ownerBalance).add(toBN(fundsToDeposit)).sub(toBN(gas)).toString(), newOwnerBalance, "The new owner balance is incorrect!")

              await catchRevert(_contract.withdraw(overLimitFunds, {from: currentOwner}))
          })
      })
})