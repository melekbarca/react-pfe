import { createSlice } from '@reduxjs/toolkit';
import { IUpdateReducer } from '../../../Interfaces';

const initiaState: IUpdateReducer = {
    selectedId: null
};

const UpdateReducer = createSlice({
    name: 'update',
    initialState: initiaState,
    reducers: {
        setSelectedId: (state: IUpdateReducer, action) => {
            state.selectedId = action.payload.selectedId
        }
    }
});

export const { setSelectedId } = UpdateReducer.actions;

export default UpdateReducer.reducer;