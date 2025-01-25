export interface PaginationControlProps {
    currentPage: number;
    totalPages: number;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    goToPage: (page: number) => void;
}
