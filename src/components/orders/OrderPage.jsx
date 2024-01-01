import Sidebar from "../sidebar/Sidebar"
import './styles/order-page.css'

const OrderPage = () => {
  return (
    <div className="order-page-container">
      <Sidebar />
      <div>
        <div className="order-page-heading">
          <p>Checkout (1 item)</p>
        </div>
        <hr />
        <div className="order-page-section">
          <div>Hey</div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage