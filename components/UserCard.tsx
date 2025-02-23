import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FC, useState } from "react";
import { contactType } from "@/types/users.types";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, toggleLike } from "@/store/slices/userSlice";
import { RootState } from "@/store/store"; // Убедись, что у тебя есть RootState

const UserCard: FC<{ user: contactType }> = ({ user }) => {
    const dispatch = useDispatch();
    const liked = useSelector(
        (state: RootState) =>
            state.users.users.find((u) => u.id === user.id)?.liked
    );

    const handleToggleLike = () => {
        dispatch(toggleLike(user.id));
    };

    const handleDelete = () => {
        dispatch(deleteUser(user.id));
    };

    return (
        <Card className="relative w-[270px] h-[350px] flex flex-wrap flex-col p-2 justify-center group">
            <Button
                size="icon"
                className="absolute top-1 left-1 rounded-full text-red-500 bg-transparent border-none text-lg font-extrabold hover:bg-gray-200 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                onClick={handleDelete}
            >
                х
            </Button>
            <button
                onClick={handleToggleLike}
                className="absolute top-1 right-1 p-1 rounded-full text-gray-500 hover:text-red-500 transition-all duration-300"
            >
                <i
                    className={`fas fa-heart text-2xl ${
                        liked ? "text-red-500" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                ></i>
            </button>
            <CardHeader>
                <CardTitle className="text-center">{user.name}</CardTitle>
                <CardDescription className="text-center mb-5">
                    {user.username}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <p>{user.company.name}</p>
            </CardContent>

            <CardFooter className="text-center mb-2">
                <p>{user.email}</p>
            </CardFooter>

            <Link href={`/users/${user.id}`} className="flex">
                <Button size="default" className="animate- self-center mx-auto">
                    Смотреть
                </Button>
            </Link>
        </Card>
    );
};

export default UserCard;
