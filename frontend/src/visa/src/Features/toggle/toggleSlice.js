import { createSlice } from '@reduxjs/toolkit';
import { FaRocket, FaUsers } from 'react-icons/fa'


const initialState = {
  toggle: false,
  touched: false,
  loader: false,
  sidebar: false,
  thememode: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-theme'
};


const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    onToggle: (state, action) => {
      state.toggle = true
    },
    offToggle: (state, action) => {
      state.toggle = false
    },
    onSidebar: (state, action) => {
      state.sidebar = true
    },
    offSidebar: (state, action) => {
      state.sidebar = false
    },
    ToggleSidebar: (state, action) => {
      state.sidebar = !state.sidebar
    },
    onloader: (state, action) => {
      state.loader = true
    },
    offloader: (state, action) => {
      state.loader = false
    },
    toggleStorageTheme: (state, action) => {
      if (state.thememode === 'light-theme') {
        state.touched = !state.touched
        state.thememode = 'dark-theme'
      } else {
        state.touched = !state.touched
        state.thememode = 'light-theme'
      }
    }

  }

});

// Dark Mode
// get the storage mode
// const getStorageMode = ()=> {
//   let thememode = 'light-theme'
//   if (localStorage.getItem('theme')) {
//     thememode = localStorage.getItem('theme')
//   }
//   return thememode;
//   state.theme = thememode
// }
// store the storage mode in a state
// toggle the storage mode
// mount the storage mode to the state mode when changes occurs

export const {
  onToggle,
  offToggle,
  toggleStorageTheme,
  onloader,
  offloader,
  ToggleSidebar,
  offSidebar,
  onSidebar
} = toggleSlice.actions;

export default toggleSlice.reducer;
