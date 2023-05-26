import { createSlice } from '@reduxjs/toolkit';
import { ISideBarReducer } from '../../../Interfaces/Redux';

const initiaState: ISideBarReducer = {
    show : false
};

const SideBarReducer = createSlice({
    name: 'sideBar',
    initialState: initiaState,
    reducers: {
        setSideBar: (state: ISideBarReducer) => {
             state.show = !state.show
        },
    }
});

export const { setSideBar } = SideBarReducer.actions;

export default SideBarReducer.reducer;
