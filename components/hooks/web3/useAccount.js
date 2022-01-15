import { useHooks } from "@components/providers/web3"

export const userAccount = () => {
    return useHooks((hooks) => hooks.userAccount)()
}