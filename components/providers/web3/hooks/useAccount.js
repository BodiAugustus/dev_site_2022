

export const UseAccount = (web3) => () => {
    return {
        account: web3 ? "test account" : "null"
    }

}