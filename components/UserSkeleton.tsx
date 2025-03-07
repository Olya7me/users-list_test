import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { FC } from "react";

const UserSkeleton: FC = () => (
    <Card className=" w-[270px] h-[350px] md:w-[230px] md:h-[310px] sm_xl:w-[210px] sm_xl:h-[290px] flex flex-wrap flex-col p-2 justify-center items-center ">
        <div className="flex flex-col h-full justify-center">
            <CardHeader>
                <Skeleton className="w-[150px] h-[20px] rounded-full mx-auto" />
                <Skeleton className="w-[100px] h-[15px] rounded mx-auto mb-5" />
            </CardHeader>
            <CardContent className="flex flex-col gap-5 ">
                <Skeleton className="w-[200px] h-[15px] rounded" />
                <Skeleton className="w-[180px] h-[15px] rounded" />
                <Skeleton className="w-[200px] h-[15px] rounded" />
            </CardContent>
        </div>
    </Card>
);

export default UserSkeleton;
