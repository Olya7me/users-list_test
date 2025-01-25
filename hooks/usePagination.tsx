import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setCurrentPage } from "@/store/slices/paginationSlice";

export const usePagination = (totalItems: number, itemsPerPage: number) => {
    const dispatch = useDispatch();

    const currentPage = useSelector(
        (state: RootState) => state.pagination.currentPage
    );

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    };

    return {
        currentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        goToPage,
    };
};
