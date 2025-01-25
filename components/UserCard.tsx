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

const UserCard: FC<{ user: contactType }> = ({ user }) => (
    <Card className="w-[255px] h-[300px] flex flex-col p-2 justify-center">
        <CardHeader>
            <CardTitle className="text-center">{user.name}</CardTitle>
            <CardDescription className="text-center mb-5">
                {user.username}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p>{user.company.name}</p>
        </CardContent>
        <CardFooter>
            <p>{user.email}</p>
        </CardFooter>
        <Link href={`/users/${user.id}`} className="flex self-center">
            <Button size="default" className="animate-">
                Смотреть
            </Button>
        </Link>
    </Card>
);

export default UserCard;
