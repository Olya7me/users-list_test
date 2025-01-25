import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
    code: string | null;
}

const initialState: ErrorState = {
    code: null,
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorState>) => {
            console.log("Set error:", action.payload);
            state.code = action.payload.code;
        },
        clearError: (state) => {
            state.code = null;
        },
    },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
