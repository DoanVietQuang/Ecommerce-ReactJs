import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((store) => store);

  console.log(order);
  const handleCheckout = (order) => {
    dispatch(getOrderById(orderId));

    navigate(`/payment`);
  };

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border mb-5">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2 w-[94vh] space-y-3 ">
          {order.order?.orderItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky ml-7 top-0 h-[100vh] w-[45vh] mt-5 lg:mt-0">
          <div className="border rounded-lg p-4">
            <p className="uppercase text-xs font-bold text-gray-600">
              Price Details
            </p>
            <hr className="my-4 border-gray-300" />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between items-center text-gray-800">
                <span>Price</span>
                <span className="">${order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-gray-800">
                <span>Discount</span>
                <span className="">${order.order?.discount}</span>
              </div>
              <div className="flex justify-between items-center text-gray-800">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex justify-between items-center text-gray-800 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ${order.order?.totalDiscountedPrice}
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

export default OrderSummary;
