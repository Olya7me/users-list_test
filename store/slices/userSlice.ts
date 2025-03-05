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
            const newUsers = action.payload.filter(
                (user) => !state.users.some((u) => u.id === user.id)
            );
            state.users = [...state.users, ...newUsers].map((user) => ({
                ...user,
                liked:
                    state.users.find((u) => u.id === user.id)?.liked ?? false,
            }));
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
        addUser(
            state,
            action: PayloadAction<contactType & { liked: boolean }>
        ) {
            state.users = [...state.users, action.payload];
        },
    },
});

export const {
    setUsers,
    deleteUser,
    toggleLike,
    toggleShowFavorites,
    addUser,
} = userSlice.actions;
export default userSlice.reducer;
