import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// getting values from the localStorage
const bagItems = JSON.parse(localStorage.getItem("bagItem"));

const initialState = {
  isSuccess: false,
  isError: false,
  bag: bagItems
    ? bagItems
    : [],
  bagDetails: null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  totalPrice: 0,
  totalQuantity: 0,
  shippingPrice: 0,
  estimatedTax: 0,
  TotalShoppingPrice: 0,
  totalBagQty: 0 ,
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    clearCartMessage: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    onCartAlert: (state, action) => {
      const bagItemPayload = action.payload;
      state.cartAlert = true;
      state.bagDetails = bagItemPayload;
    },

    addProductToCart: (state, action) => {
      // console.log(action);
      const bagPayload = action.payload;
      console.log(bagPayload);
      // // find the product in the bag
      const isProductInBag = state.bag?.find((x) => x?._id === bagPayload?._id);
      // check for existence in the bag
      if (isProductInBag) {
        state.showAlert = true;
        state.alertText = `${bagPayload.title} has been successfully added to your cart`;
        // update the bag
        state.bag = state.bag?.map((x) =>
          x?._id === isProductInBag?._id ? { ...bagPayload, quantity: 1 } : x
        );
        localStorage.setItem("bagItem", JSON.stringify(state.bag));
      } else {
        state.bag = [...state.bag, { ...bagPayload, quantity: 1 }];
        localStorage.setItem("bagItem", JSON.stringify(state.bag));
        state.showAlert = true;
        state.alertText = `${bagPayload.title} has been successfully added to your cart`;
      }
    },
    increaseBagQty: (state, action) => {
      // get the payload
      const bagPayload = action.payload;
      // check if the map payload is same as the received payload
      // then increase the required item
      const result = state.bag.map((item) => {
        if (item._id === bagPayload._id) {
          let num = (item.quantity + 1).toFixed(parseInt(3));
          const modifiedNumber = parseFloat(num);
          return { ...item, quantity: modifiedNumber };
        }
        return item;
      });
      state.bag = result;
      localStorage.setItem("bagItem", JSON.stringify(state.bag));
      state.showAlert = true;
      state.alertType = "success";
      state.alertText = `${bagPayload.title} quantity has been successfully updated`;
    },
    decreaseBagQty: (state, action) => {
      // get the payload
      const bagPayload = action.payload;
      // check if the map payload is same as the received payload
      // then descrease the required item
      const result = state.bag.map((item) => {
        if (item._id === bagPayload._id) {
          return {
            ...item,
            quantity: (parseInt(item.quantity) - 1).toFixed(2),
          };
        }
        return item;
      });
      state.bag = result;
      localStorage.setItem("bagItem", JSON.stringify(state.bag));
      state.showAlert = true;
      state.alertType = "success";
      state.alertText = `${bagPayload.title} quantity has been successfully updated`;
    },
    calculateBagItem: (state, action) => {
      const { totalBagPrice, totalBagQty } = state.bag.reduce(
        (acc, total) => {
          const { price, quantity } = total;
          acc.totalBagQty += parseInt(quantity);
          acc.totalBagPrice += parseInt(quantity) * parseInt(price);

          return acc;
        },
        { totalBagPrice: 0, totalBagQty: 0 }
      );
      state.totalPrice = totalBagPrice;
      state.totalQuantity = totalBagQty;
      localStorage.setItem("totalPrice", state.totalPrice);
      state.estimatedTax = 30;
      state.TotalShoppingPrice =
        state.shippingPrice + state.estimatedTax + state.totalPrice;
      localStorage.setItem("TotalShoppingPrice", state.TotalShoppingPrice);
    },
    removeBagItem: (state, action) => {
      const bagItemPayload = action.payload;
      // remove the item from the bag
      state.bag = state.bag.filter((x) => x._id !== bagItemPayload._id);
      state.showAlert = true;
      state.alertType = "danger";
      state.alertText = `${bagItemPayload.title} has been successfully removed from your cart items`;
      localStorage.setItem("bagItem", JSON.stringify(state.bag));
    },
    ClearBagData: (state, action) => {
      localStorage.removeItem("bagItem");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("TotalShoppingPrice");
      state.isLoading = false;
      state.isSuccess = false;
      state.alertType = "";
      state.showAlert = false;
      state.alertText = "";
    },
  },
});

// console.log(bagSlice);
export const {
  clearCartAlert,
  addProductToCart,
  calculateBagItem,
  removeBagItem,
  ClearBagData,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
  clearCartMessage,
} = bagSlice.actions;

export default bagSlice.reducer;
