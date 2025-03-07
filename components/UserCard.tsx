import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FC } from "react";
import { contactType } from "@/types/users.types";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, toggleLike } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";

const UserCard: FC<{ user: contactType }> = ({ user }) => {
    const dispatch = useDispatch();
    const liked = useSelector(
        (state: RootState) =>
            state.users.users.find((u) => u.id === user.id)?.liked
    );

    const handleToggleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleLike(user.id));
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteUser(user.id));
    };

    return (
        <Card className="relative w-[270px] h-[350px] md:w-[230px] md:h-[310px] sm_xl:w-[210px] sm_xl:h-[290px] flex flex-wrap flex-col p-2 justify-center items-center group">
            <Button
                size="icon"
                className="absolute top-1 left-1 rounded-full text-red-500 bg-transparent border-none text-lg font-extrabold hover:bg-gray-200 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                onClick={handleDelete}
            >
                х
            </Button>
            <button
                onClick={handleToggleLike}
                className="absolute top-1 right-1 p-1 rounded-full transition-all duration-300"
            >
                <i
                    className={`fas fa-heart text-2xl ${
                        liked ? "text-red-500" : "text-gray-400"
                    } transition-all duration-300 transform hover:scale-110`}
                    aria-hidden="true"
                ></i>
            </button>

            <Link
                href={`/users/${user.id}`}
                className="group flex flex-col h-full justify-center"
            >
                <CardHeader>
                    <CardTitle className="text-center">{user.name}</CardTitle>
                    <CardDescription className="text-center mb-5">
                        {user.username}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p>{user.company.name}</p>
                </CardContent>

                <CardContent>
                    <p>{user.website}</p>
                </CardContent>

                <CardFooter className="text-center mb-2">
                    <p>{user.email}</p>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default UserCard;
