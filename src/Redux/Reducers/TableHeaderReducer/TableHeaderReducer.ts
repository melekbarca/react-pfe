import { createSlice } from '@reduxjs/toolkit';
import { ITableHeaderReducer } from '../../../Interfaces';

const initiaState: ITableHeaderReducer = {
    contactTable: [],
    compteTable: [],
    userTable: [],
};

const TableHeaderReducer = createSlice({
    name: 'tableHeader',
    initialState: initiaState,
    reducers: {
        setHeader: (state: ITableHeaderReducer, action) => {
            if (action.payload.tableName === "compte") {
                state.compteTable = action.payload.tableHeader
            }
            else if (action.payload.tableName === "user") {
                state.userTable = action.payload.tableHeader
            }
            else if (action.payload.tableName === "contact") {
                state.contactTable = action.payload.tableHeader
            }
        }

    }
});

export const { setHeader } = TableHeaderReducer.actions;

export default TableHeaderReducer.reducer;
