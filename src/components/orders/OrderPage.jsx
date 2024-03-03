import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../sidebar/Sidebar";
import './styles/order-page.css';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import slips from '../../assets/slips.jpg';
import { PaystackButton } from "react-paystack";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products/productSlice";
import { fetchUserAddress } from "../../redux/user-address/userAddresSlice";
import AddAddress from "./AddAddress";

const OrderPage = () => {
  const products = useSelector((state) => state.product.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const storedUSerInfo = localStorage.getItem("USER_INFO");
  const parsedData = JSON.parse(storedUSerInfo);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Array.isArray(products)) {
      dispatch(fetchProducts());
      dispatch(fetchUserAddress());
    }
  }, [dispatch]);

  const specificProduct = Array.isArray(products) ? products.find(product => product.id === parseInt(id)) : null;
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  let itemsPrice = 0;
  let totalPrice = 0;

  if (specificProduct !== null) {
    itemsPrice = parseFloat((specificProduct.price * selectedQuantity).toFixed(2));
    totalPrice = Math.ceil(itemsPrice + specificProduct.batch.shipping_cost);
  }

  const componentProps = {
    email: parsedData.email,
    amount: totalPrice * 100,
    currency: 'GHS',
    metadata: {
      name: parsedData.name,
    },
    publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
    text: "Place Order",
    onSuccess: ({ reference }) => {
      alert(`Your purchase was successful! Transaction reference: ${reference}`)
      navigate('/');
    },  
    onClose: () => alert("Refresh and try again!"),
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  if (specificProduct === null) {
    return (
      <div>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="order-page-container">
      <Sidebar />
      <div>
        <div className="order-page-heading">
        <p>{`Checkout (${selectedQuantity} ${selectedQuantity === 1 ? 'item' : 'items'})`}</p>
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
                  <div>
                    <input 
                      type="radio"
                      name="address"
                      className="flex"
                      checked
                    />
                  </div>
                  <span className="text-xs">Spencer Okyere B1023/24 Obonu St, Accra, Ghana.<span>Edit address</span></span>
                </div>
                <div className="mt-2 px-2 mb-5">
                  <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  <span className="pl-1 text-sm add-address" onClick={openPopup}>Add Address</span>
                  {isPopupOpen && <AddAddress onClose={closePopup} />}
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
                  <p className='font-bold uppercase text-sm'>{specificProduct.name}</p>
                  <p className="items-desc text-sm">{specificProduct.description}</p>
                  <span className="text-sm block ship-title font-semibold">GH₵ {specificProduct.price}</span>
                  <select
                    className="text-xs quantity-dropdown"
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                  >
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
                <p>GH₵ {itemsPrice}</p>
              </span>
              <span className="text-xs flex justify-between">
                <p>Estimated Shipping:</p>
                <p>GH₵ {specificProduct.batch.shipping_cost}</p>
              </span>
              <hr className="mt-1 hori-line" />
              <span className="flex justify-between font-bold mt-5">
                <p className="order-total">Order Total:</p>
                <p>GHc {totalPrice}</p>
              </span>
            </div>
            <PaystackButton 
              className="place-order mt-7 text-sm"
              {...componentProps} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;
