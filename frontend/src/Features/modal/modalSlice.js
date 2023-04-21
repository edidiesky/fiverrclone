import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  usermodal:false,
  TaskModal:false,
  SearchModal:false,
};


const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onuserModal:(state, action)=> {
      state.usermodal = true
    },
     offuserModal:(state, action)=> {
      state.usermodal = false
    },
    ToggleUserModal:(state, action)=> {
      state.usermodal = !state.usermodal
    },

    onTaskModal:(state, action)=> {
      state.TaskModal = true
    },
     offTaskModal:(state, action)=> {
      state.TaskModal = false
    },
    ModalTaskModal:(state, action)=> {
      state.TaskModal = !state.TaskModal
    },

     onSearchModal:(state, action)=> {
      state.SearchModal = true
    },
     offSearchModal:(state, action)=> {
      state.SearchModal = false
    },
    ModalSearchModal:(state, action)=> {
      state.SearchModal = !state.SearchModal
    },

   }

});


export const {
 onuserModal,
 offuserModal,
 ToggleUserModal,

 onTaskModal,
 offTaskModal,
 ToggleTaskModal,

 onSearchModal,
 offSearchModal,
 ToggleSearchModal
} = modalSlice.actions;

export default modalSlice.reducer;
