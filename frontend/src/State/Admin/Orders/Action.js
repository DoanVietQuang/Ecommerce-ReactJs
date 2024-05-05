import { api } from "../../../config/ApiConfig";
import {
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";

// Get all orders
export const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
      const response = await api.get(`/api/admin/orders/`);
      console.log("get all orders ", response.data);
      dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
    }
  };
};

// confirm order

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDER_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    const data = response.data;
    console.log("confirm_order ", data);
    dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
  }
};

// ship order
export const shipOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: SHIP_ORDER_REQUEST });
    const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
    console.log("ship order", data);
    dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
  }
};

// delivered order
export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`);
    console.log("delivered order", data);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
  }
};

// delete order
export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    const { data } = await api.delete(`/api/admin/orders/${orderId}/delete`);
    console.log("delete order", data);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
  }
};

// // cancel order
// export const cancelOrder = (orderId) => async (dispatch) => {
//   dispatch({ type: CANCELED_ORDER_REQUEST });
//   try {
//     const { data } = await api.put(`/api/admin/orders/${orderId}/cancel`);
//     console.log("cancel order", data);
//     dispatch({ type: CANCELED_ORDER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: CANCELED_ORDER_FAILURE, payload: error.message });
//   }
// };
