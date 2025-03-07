import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    EnvelopeIcon,
    HomeIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { contactType } from "@/types/users.types";

export const UserDetails: FC<{ user: contactType }> = ({ user }) => (
    <Card className="max-w-lg flex flex-col p-2 justify-center mx-auto ">
        <CardHeader>
            <CardTitle className="text-center text-3xl md:text-xl sm_xl:text-xl">
                {user.name}
            </CardTitle>
            <CardDescription className="text-center mb-5 text-lg">
                {user.username}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 text-lg">
            <p className="flex gap-2">
                <strong>
                    <EnvelopeIcon className="size-6 text-blue-500" />
                </strong>
                {user.email}
            </p>
            <p className="flex gap-2">
                <strong>
                    <HomeIcon className="size-6 text-blue-500" />
                </strong>
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            </p>
            <p className="flex gap-2">
                <strong>
                    <DevicePhoneMobileIcon className="size-6 text-blue-500" />
                </strong>
                {user.phone}
            </p>
            <p className="flex gap-2">
                <strong>
                    <GlobeAltIcon className="size-6 text-blue-500" />
                </strong>
                {user.website}
            </p>
            <p className="flex gap-2">
                <strong>
                    <BriefcaseIcon className="size-6 text-blue-500" />
                </strong>
                {user.company.name}
            </p>
        </CardContent>
    </Card>
);
