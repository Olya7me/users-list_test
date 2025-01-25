import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
    currentPage: number;
}

const initialState: PaginationState = {
    currentPage: 1,
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
