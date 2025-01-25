import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { FC } from "react";

const UserSkeleton: FC = () => (
    <Card className="w-[250px] h-[300px] flex flex-col p-2 justify-center">
        <CardHeader>
            <Skeleton className="w-[100px] h-[20px] rounded-full mx-auto" />
            <Skeleton className="w-[150px] h-[15px] mt-2 rounded mx-auto" />
        </CardHeader>
        <CardContent>
            <Skeleton className="w-[200px] h-[15px] rounded mb-2" />
            <Skeleton className="w-[180px] h-[15px] rounded" />
        </CardContent>
        <CardFooter>
            <Skeleton className="w-[150px] h-[15px] rounded mx-auto" />
        </CardFooter>
        <Skeleton className="w-[100px] h-[40px] rounded-full mt-4 mx-auto" />
    </Card>
);

export default UserSkeleton;
