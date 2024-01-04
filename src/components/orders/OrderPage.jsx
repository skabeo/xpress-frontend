import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "../sidebar/Sidebar"
import './styles/order-page.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const OrderPage = () => {
  return (
    <div className="order-page-container">
      <Sidebar />
      <div>
        <div className="order-page-heading">
          <p>Checkout ( 1 item )</p>
        </div>
        <hr />
        <div className="order-page-section">
          <div className="order-first-section">
            <div>
              <p>Shipping address</p>
              <div className="inner-order-list">
                <p className="font-bold text-sm mb-1">Your address</p>
                <hr />
                <div className="radio-address">
                  <input 
                    type="radio"
                    name="address"
                    checked
                  />
                  <span className="text-xs">Spencer Okyere B1023/24 Obonu St, Accra, Ghana.<span>Edit address</span></span>
                </div>
                <div className="mt-2 px-2 text-sm">
                  <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  <span className="pl-1">Add Address</span>
                </div>
              </div>
              <p>What</p>
            </div>
            <div>
              <p>Items and shipping</p>
            </div>
            <div>
              <p>Payment method</p>
            </div>
          </div>
          <div className="order-sec-section">Hello</div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage