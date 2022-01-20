import { toast } from "react-toastify"

export const withToast = (promise) => {
    toast.promise(
        promise,
        {
          pending: {
            render(){
              return (
                  <div className="p-6 py-2 bg-sky-400 text-white">
                    <p className="mb-2">
                        Your transaction is being processed
                    </p>
                    <p>Please hold..</p>

                  </div>
              )
            },
            icon: false,
          },
          success: {
            render({data}){
              return (
                  <div className="">
                      {/* <p className="font-bold">
                      Tx: {data.transactionHash.slice(0,20)}...

                      </p> */}
                      <p className="">Transaction was successful!</p>
                      {/* <a rel="noreferrer" href={`https://ropsten.etherscan.io/tx/${data.transactionHash}`} target="_blank">
                          <i className="text-sky-400 underline">See transaction details</i>
                      </a> */}
                  </div>
              )
            },
            // other options
            icon: "🌞",
          },
          error: {
            render({data}){
              // When the promise reject, data will contains the error
              return <div>{data.message ?? "Transaction has failed!"}</div>
            }
          }
        },
        {
            closeButton: true,
            position: toast.POSITION.TOP_LEFT
        }

    )
}