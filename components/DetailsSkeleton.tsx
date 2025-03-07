import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export const DetailsSkeleton: FC = () => (
    <Card className="max-w-lg h-[300px] flex flex-col p-2 mx-auto mb-20">
        <CardHeader>
            <Skeleton className="w-[100px] h-[20px] rounded-full mx-auto" />
            <Skeleton className="w-[150px] h-[15px] text-center mb-5 mx-auto" />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            <Skeleton className="w-[200px] h-[15px] rounded" />
            <Skeleton className="w-[180px] h-[15px] rounded" />
            <Skeleton className="w-[200px] h-[15px] rounded" />
            <Skeleton className="w-[180px] h-[15px] rounded" />
            <Skeleton className="w-[200px] h-[15px] rounded" />
        </CardContent>
    </Card>
);
