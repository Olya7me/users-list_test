import { FC } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/router";
import Link from "next/link";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const BreadcrumbComponent: FC = () => {
    const router = useRouter();
    const { pathname, query } = router;
    const { id } = query;

    const isUserPage = pathname.includes("/users/");

    const user = useSelector((state: RootState) =>
        state.users.users.find((u) => u.id === Number(id))
    );

    return (
        <Breadcrumb className="mb-20 container mx-auto">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Главная</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild isActive={pathname === "/users"}>
                        <Link href="/users">Пользователи</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {isUserPage && user && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                <span className="text-blue-500 hover:text-blue-700">
                                    {user.name}
                                </span>
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;
