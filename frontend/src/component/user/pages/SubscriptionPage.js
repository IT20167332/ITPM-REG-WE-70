import React, {  useState } from "react"
import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"
import './SubscriptionPage.css'


const SubscriptionPage = () => {
  const [success, setSuccess] = useState(false)
  const [showPayhere, setShowPayhere] = useState(false)


  return (
      <div id="payhere-modal">
        <div className="sp-main-containner">
          
          <div className="sp-containar">

            
              <button className="btn btn-warning sp-button" 
                onClick={() => setShowPayhere(true)}
              >
                Continue to payment
            </button>
          </div>
        

        <Payhere
          customerName="Johnathan Appleseed"
          customerEmail="john.appleseed@example.org"
          
          selector="#payhere-modal"
          embedURL={"https://app.payhere.co/altlabs/coffee"}
          open={showPayhere}
          onSuccess={data => {
            console.log("Payhere success", data)
            setSuccess(true)
          }}
          onFailure={err => {
            console.log("Payhere failed", err)
            setSuccess(true)
          }}
          onClose={() => {
            setShowPayhere(false)
            if (success) {
              console.log("Payment success")
            } else {
              console.log("Payment failed")
            }
          }}
        />
      </div>

    </div>

  )
}
export default SubscriptionPage