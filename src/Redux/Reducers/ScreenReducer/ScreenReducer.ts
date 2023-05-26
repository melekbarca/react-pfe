import { createSlice } from '@reduxjs/toolkit';
import { IScreenReducer } from '../../../Interfaces';

const initiaState: IScreenReducer = {
    height: window.innerHeight,
    width: window.innerWidth
};

const ScreenReducer = createSlice({
    name: 'screen',
    initialState: initiaState,
    reducers: {
        setScreen: (state: IScreenReducer, action) => {
            state.height = action.payload.height,
            state.width = action.payload.width
        },
    }
});

export const { setScreen } = ScreenReducer.actions;

export default ScreenReducer.reducer;
