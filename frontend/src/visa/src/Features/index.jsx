import {
  onToggle,
  offToggle,
  toggleStorageTheme,
  onloader,
  offloader,
  ToggleSidebar,
  offSidebar,
  onSidebar
} from "./toggle/toggleSlice";

import {
  onOrderModal,
  offOrderModal,
  ToggleOrderModal,
  onCartModal,
  offCartModal,
  ToggleCartModal,
} from "./modal/modalSlice";

import {
  getAllVisa,
  getSingleVisaDetails,
  CreateSingleVisa,
  adminDeleteVisa,
  adminUpdateVisa,
} from "./visa/visaReducer";

import {
  getAllinvestment,
  getSingleinvestmentDetails,
  CreateSingleinvestment,
  adminDeleteinvestment,
  adminUpdateinvestment,
} from "./apartment/apartmentReducer";
import {
  getCoinBaseUrl,
} from "./pay/payReducer";


import {
  addProductToCart,
  calculateBagItem,
  removeBagItem,
  ClearBagData,
  clearCartAlert,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
  clearCartMessage,
} from "./bag/bagSlice";


export {
  onToggle,
  offToggle,
  addProductToCart,
  calculateBagItem,
  removeBagItem,
  ClearBagData,
  clearCartAlert,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
  clearCartMessage,
  toggleStorageTheme,
  onloader,
  offloader,
  ToggleSidebar,
  offSidebar,
  onOrderModal,
  offOrderModal,
  ToggleOrderModal,
  onCartModal,
  offCartModal,
  ToggleCartModal,
  // visa
  getAllVisa,
  getSingleVisaDetails,
  CreateSingleVisa,
  adminDeleteVisa,
  adminUpdateVisa,
  // investment
  getAllinvestment,
  getSingleinvestmentDetails,
  CreateSingleinvestment,
  adminDeleteinvestment,
  adminUpdateinvestment,

  getCoinBaseUrl,
  onSidebar
};
