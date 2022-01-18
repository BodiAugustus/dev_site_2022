
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
})