import { useHooks } from "@components/providers/web3"

const _isEmpty = data => {
    return (
        data == null || 
        data == ""  ||
        (Array.isArray(data) && data.length === 0) ||
        (data.constructor === Object && Object.keys(data).length === 0)

    )
}

const enhanceHook = (swrRes) => {
    const {data, error} = swrRes
    const hasInitialResponse = !!(data || error)
    const isEmpty = hasInitialResponse && _isEmpty(data)

    return {
        ...swrRes,
        isEmpty,
        hasInitialResponse
    }
}

export const useNetwork = () => {
    const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)())
    return {
        network: swrRes
    }
}


export const useAccount = () => {
    const swrRes = enhanceHook(useHooks(hooks => hooks.useAccount)())
    return {
        account: swrRes
    }
}

export const useWalletInfo = () => {
    const { account } = useAccount()
    const { useNetwork } = useNetwork()

    return {
        account,
        network,
        canPurchase: !!(account.data && network.isSupported)
    }
}