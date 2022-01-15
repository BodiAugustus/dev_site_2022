

export const handlerToGetUserMetaAccnt = (web3) => () => {
    return {
        account: web3 ? "test account" : "null"
    }

}