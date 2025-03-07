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
    const isCreateUserPage = pathname === "/create-user";

    const user = useSelector((state: RootState) =>
        state.users.users.find((u) => u.id === Number(id))
    );

    const showOnlyFavorites = useSelector(
        (state: RootState) => state.users.showOnlyFavorites
    );

    return (
        <Breadcrumb className="mb-14 container mx-auto md:p-5 sm_xl:p-3 sm_xl:text-lg">
            <BreadcrumbList>
                <BreadcrumbItem className="sm_xl:text-sm md:text-sm">
                    <BreadcrumbLink asChild>
                        <Link href="/">Главная</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="sm_xl:text-sm md:text-sm">
                    <BreadcrumbLink asChild isActive={pathname === "/users"}>
                        <Link href="/users">
                            {showOnlyFavorites
                                ? "Избранное"
                                : "Все пользователи"}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {isUserPage && user && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className="sm_xl:text-sm md:text-sm">
                            <BreadcrumbPage>
                                <span className="text-blue-500 hover:text-blue-700">
                                    {user.name}
                                </span>
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
                {isCreateUserPage && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className="sm_xl:text-sm md:text-sm">
                            <BreadcrumbPage>
                                <span className="text-blue-500 hover:text-blue-700">
                                    Создать пользователя
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
