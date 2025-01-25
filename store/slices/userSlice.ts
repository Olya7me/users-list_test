import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactType } from "@/types/users.types";

interface UserState {
    users: contactType[];
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<contactType[]>) {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
