import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";
import { clearError } from "../store/slices/errorSlice";
import { RootState } from "../store/store";
import Image from "next/image";

const Error: FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { code } = useSelector((state: RootState) => state.error);
    const [redirected, setRedirected] = useState(false);

    useEffect(() => {
        if (!redirected) {
            const timeoutId = setTimeout(() => {
                dispatch(clearError());
                router.replace("/");
                setRedirected(true);
            }, 5000);

            return () => clearTimeout(timeoutId);
        }
    }, [dispatch, router, redirected]);
    return (
        <div>
            <h1 className="text-center text-blue-500 text-9xl">
                {code ? code : 404}
            </h1>
            <p className="text-center text-gray-700 text-2xl">
                Упс! Произошла ошибка
            </p>
            <p className="text-center text-gray-700 text-2xl">
                Перенаправим вас на главную страницу...
            </p>
            <Image
                className="mx-auto animate-slow-spin"
                src="/error.png"
                alt="Ошибка"
                width={350}
                height={350}
            />
        </div>
    );
};

export default Error;
