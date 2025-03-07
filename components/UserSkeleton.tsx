import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { FC } from "react";

const UserSkeleton: FC = () => (
    <Card className=" w-[270px] h-[350px] flex flex-wrap flex-col p-2 justify-center items-center ">
        <div className="flex flex-col h-full justify-center">
            <CardHeader>
                <Skeleton className="w-[150px] h-[20px] rounded-full mx-auto" />
                <Skeleton className="w-[100px] h-[15px] rounded mx-auto mb-5" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-[200px] h-[15px] rounded mb-6" />
                <Skeleton className="w-[180px] h-[15px] rounded mb-2" />
            </CardContent>
            <CardFooter>
                <Skeleton className="w-[200px] h-[15px] rounded mx-auto mb-2" />
            </CardFooter>
        </div>
    </Card>
);

export default UserSkeleton;
