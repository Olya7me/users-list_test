import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import { useGetUsersQuery } from "@/store/users/user.api";
import { setUsers } from "@/store/slices/userSlice";
import { useHandleError } from "@/hooks/useHandleError";
import { usePagination } from "@/hooks/usePagination";

import UserSkeleton from "@/components/UserSkeleton";
import UserCard from "@/components/UserCard";
import PaginationControl from "@/components/PaginationControl";
import { RootState } from "@/store/store";

const Users: FC = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetUsersQuery(undefined);
    useHandleError(error);

    useEffect(() => {
        if (data) {
            dispatch(setUsers(data));
        }
    }, [data, dispatch]);

    const users = useSelector((state: RootState) => state.users.users);

    const itemsPerPage = 4;

    const {
        currentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        goToPage,
    } = usePagination(users.length, itemsPerPage);

    const currentUsers = users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const renderContent = () => {
        if (isLoading || !users.length) {
            return Array(itemsPerPage)
                .fill(null)
                .map((_, index) => <UserSkeleton key={index} />);
        }

        if (!users.length) {
            return (
                <div className="text-center text-gray-500 text-3xl">
                    Упс!... Тут ничего нет
                </div>
            );
        }

        return currentUsers.map((user) => (
            <UserCard key={user.id} user={user} />
        ));
    };

    return (
        <section className="flex flex-col">
            <div className="container mx-auto p-4">
                <h1 className="text-center mb-20 text-4xl">
                    Список пользователей
                </h1>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{
                            duration: 0.2,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                        className="w-[95%] flex flex-wrap gap-5 mx-auto justify-center mb-10"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>

                {!isLoading && users.length > 0 && (
                    <PaginationControl
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToNextPage={goToNextPage}
                        goToPreviousPage={goToPreviousPage}
                        goToPage={goToPage}
                    />
                )}
            </div>
        </section>
    );
};

export default Users;
