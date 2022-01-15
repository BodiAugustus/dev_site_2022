

import { handlerToGetUserMetaAccnt  } from "./useAccount";


export const setupHooks = (web3, provider) => {
    return {
        usersMetaAccount: handlerToGetUserMetaAccnt(web3, provider)
    }
}