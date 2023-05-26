import { createSlice } from '@reduxjs/toolkit';
import { IOpenModal, ICloseModal, IModalReducer } from '../../../Interfaces';

const initiaState: IModalReducer = {
  data: null,
  name: "",
  tableName: ""
};

const ModalReducer = createSlice({
  name: 'modal',
  initialState: initiaState,
  reducers: {
    openModal: (state: IModalReducer, action) => {
      console.log("action.payload", action.payload);

      state.data = action.payload.data
      state.name = action.payload.name
      state.tableName = action.payload.tableName
    },
    closeModal: (state: IModalReducer) => {
      state.data = null
      state.name = ""
      state.tableName = ""

    },
  }
});

export const { openModal, closeModal } = ModalReducer.actions;

export default ModalReducer.reducer;
