import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "../sidebar/Sidebar"
import './styles/order-page.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import slips from '../../assets/slips.jpg'

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
              <p className="ship-title font-bold mb-4">Shipping address</p>
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
                <div className="mt-2 px-2 text-sm mb-5">
                  <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  <span className="pl-1">Add Address</span>
                </div>
                <button className="text-xs font-bold use-address-btn">Use this address</button>
              </div>
            </div>
            <div className="mt-5">
              <p className="ship-title font-bold mb-4">Quantity</p>
              <div className="items-inner-container">
                <div className="items-img-container">
                  <img src={slips} alt="image" className="items-img" />
                </div>
                <div>
                  <p className="items-desc text-sm">Lorem Lorem lorem lorem lorem ipsum lorem ipsum Lorem Lorem lorem lorem lorem ipsum lorem ipsum Lorem Lorem lorem lorem lorem ipsum lorem ipsum Lorem Lorem lorem lorem lorem ipsum lorem ipsum Lorem Lorem lorem lorem lorem ipsum lorem ipsum</p>
                  <span className="text-sm block ship-title font-semibold">GHc 30.45</span>
                  <select className="text-xs quantity-dropdown">
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        Qty: {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="order-sec-section p-4">
            <h2 className="font-bold mb-5">Order Summary</h2>
            <div>
              <span className="text-xs flex justify-between mb-1">
                <p>Items:</p>
                <p>GHc 35.00</p>
              </span>
              <span className="text-xs flex justify-between">
                <p>Estimated Shipping:</p>
                <p>GHc 35.00</p>
              </span>
              <hr className="mt-1 hori-line" />
              <span className="flex justify-between font-bold mt-5">
                <p className="order-total">Order Total:</p>
                <p>GHc 35.00</p>
              </span>
            </div>
            <button className="place-order mt-7 text-sm">Place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage