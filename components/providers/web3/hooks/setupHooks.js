

import { handlerToGetUserMetaAccnt  } from "./useAccount";


export const setupHooks = (web3) => {
    return {
        usersMetaAccount: handlerToGetUserMetaAccnt(web3)
    }
}