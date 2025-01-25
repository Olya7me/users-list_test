import { FC } from "react";
import { useRouter } from "next/router";
import { DetailsSkeleton } from "@/components/DetailsSkeleton";
import { UserDetails } from "@/components/UserDetails";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const User: FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const users = useSelector((state: RootState) => state.users.users);

    const user = users.find((user) => user.id === Number(id));

    return (
        <section>
            <div className="container mx-auto p-5">
                {!user ? <DetailsSkeleton /> : <UserDetails user={user} />}
            </div>
        </section>
    );
};

export default User;
