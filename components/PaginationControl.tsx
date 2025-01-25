import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from "react";
import { PaginationControlProps } from "@/types/pagination";

const PaginationControl: FC<PaginationControlProps> = ({
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
}) => (
    <Pagination className="flex justify-center mt-auto p-5">
        <PaginationContent className="cursor-pointer text-xl">
            <PaginationItem>
                <PaginationPrevious
                    onClick={goToPreviousPage}
                    isDisabled={currentPage === 1}
                />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                    <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem>
                <PaginationNext
                    onClick={goToNextPage}
                    isDisabled={currentPage === totalPages}
                />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
);

export default PaginationControl;
