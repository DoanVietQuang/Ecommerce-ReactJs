import React, { useEffect } from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);
  return (
    <div className="ml-32">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] w-[45vh] mt-5 lg:mt-0">
          <div className="border rounded-lg p-4">
            <p className="uppercase text-xs font-bold text-gray-600">
              Price Details
            </p>
            <hr className="my-4 border-gray-300" />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between items-center text-gray-800">
                <span>Price</span>
                <span className="">${cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-gray-800">
                <span>Discount</span>
                <span className="">${cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between items-center text-gray-800">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex justify-between items-center text-gray-800 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ${cart.cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
