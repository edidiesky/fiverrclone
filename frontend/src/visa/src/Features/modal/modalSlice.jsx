import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartModal: false,
  SearchModal: false,
  orderModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onOrderModal: (state, action) => {
      state.orderModal = true;
    },
    offOrderModal: (state, action) => {
      state.orderModal = false;
    },
    ToggleOrderModal: (state, action) => {
      state.orderModal = !state.orderModal;
    },

    onCartModal: (state, action) => {
      state.cartModal = true;
    },
    offCartModal: (state, action) => {
      state.cartModal = false;
    },
    ToggleCartModal: (state, action) => {
      state.cartModal = !state.cartModal;
    },

    // onSearchModal: (state, action) => {
    //   state.SearchModal = true;
    // },
    // offSearchModal: (state, action) => {
    //   state.SearchModal = false;
    // },
    // ModalSearchModal: (state, action) => {
    //   state.SearchModal = !state.SearchModal;
    // },
  },
});

export const {
  onOrderModal,
  offOrderModal,
  ToggleOrderModal,

  onCartModal,
  offCartModal,
  ToggleCartModal,
} = modalSlice.actions;

export default modalSlice.reducer;
