import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactType } from "@/types/users.types";

interface UserState {
    users: (contactType & { liked: boolean })[];
    showOnlyFavorites: boolean;
}

const initialState: UserState = {
    users: [],
    showOnlyFavorites: false,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<contactType[]>) {
            state.users = action.payload.map((user) => {
                const existingUser = state.users.find((u) => u.id === user.id);
                return {
                    ...user,
                    liked: existingUser ? existingUser.liked : false,
                };
            });
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
        },
        toggleLike: (state, action: PayloadAction<number>) => {
            const user = state.users.find((user) => user.id === action.payload);
            if (user) {
                user.liked = !user.liked;
            }
        },
        toggleShowFavorites: (state) => {
            state.showOnlyFavorites = !state.showOnlyFavorites;
        },
    },
});

export const { setUsers, deleteUser, toggleLike, toggleShowFavorites } =
    userSlice.actions;
export default userSlice.reducer;
