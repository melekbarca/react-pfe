import { createSlice } from '@reduxjs/toolkit';
import { Elang, ISettingReducer } from '../../../Interfaces';


const initiaState: ISettingReducer = {
  lang: Elang.fr
};

const SettingReducer = createSlice({
  name: 'setting',
  initialState: initiaState,
  reducers: {
    setLang: (state: ISettingReducer, action) => {
      state.lang = action.payload
    },
  }
});

export const { setLang } = SettingReducer.actions;

export default SettingReducer.reducer;
