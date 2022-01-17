import useSWR from "swr"

const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
const URLXMR = "https://api.coingecko.com/api/v3/coins/monero?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
const URLFTM = "https://api.coingecko.com/api/v3/coins/fantom?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"

const fetcher = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    // console.log(json);
    // debugger
    return json.market_data.current_price.usd ?? null
}

export const useEthPrice = () => {
   const swrRes = useSWR(
        URL,
        fetcher,
        {refreshInterval: 100000}
    )
    // debugger
    return { eth: { ...swrRes }}
   }

   const fetcherXMR = async (url) => {
       const res = await fetch(url)
       const json = await res.json()
       return json.market_data.current_price.usd ?? null
   }

   export const useXmrPrice = () => {
       const swrRes = useSWR(
           URLXMR,
           fetcherXMR,
           {refreshInterval: 100000}
       )
       return { xmr: { ...swrRes}}
   }

   const fetcherFTM = async (url) => {
       const res = await fetch(url)
       const json = await res.json()
         console.log(json);
       return json.market_data.current_price.usd ?? null
   }

   export const useFtmPrice = () => {
       const swrRes = useSWR(
           URLFTM,
           fetcherFTM,
           {refreshInterval: 100000}
       )
       return { ftm: { ...swrRes}}
   }