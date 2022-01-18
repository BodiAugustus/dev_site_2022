
const { isTargetLikeServerless } = require("next/dist/server/config")
const { catchRevert } = require("./utils/exceptions")

const ProfilePayments = artifacts.require("ProfilePayments")

contract("ProfilePayments", accounts => {
    let _contract = null
    let contractOwner = null
    
    
    before( async ()=> {
        _contract = await ProfilePayments.deployed()
        contractOwner = accounts[0]

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
})