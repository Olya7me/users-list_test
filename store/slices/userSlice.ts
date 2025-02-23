import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactType } from "@/types/users.types";

interface UserState {
    users: (contactType & { liked: boolean })[]; // Добавили поле liked
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<contactType[]>) {
            state.users = action.payload.map((user) => ({
                ...user,
                liked: false,
            })); // Добавляем liked: false
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
        },
        toggleLike: (state, action: PayloadAction<number>) => {
            const user = state.users.find((user) => user.id === action.payload);
            if (user) {
                user.liked = !user.liked; // Переключаем лайк
            }
        },
    },
});

export const { setUsers, deleteUser, toggleLike } = userSlice.actions;
export default userSlice.reducer;
