import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setError } from "../store/slices/errorSlice";

export const useHandleError = (error: any) => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (error?.status) {
            const errorCode = String(error.status);

            dispatch(
                setError({
                    code: errorCode,
                })
            );
            router.push("/404");
        }
    }, [error]);
};
