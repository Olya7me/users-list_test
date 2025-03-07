import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const AddNew: FC = () => {
    const showOnlyFavorites = useSelector(
        (state: RootState) => state.users.showOnlyFavorites
    );

    return (
        !showOnlyFavorites && (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button className="relative h-9 px-5 py-2 md:h-7 md:px-3 sm_xl:h-7 sm_xl:px-3">
                            <i
                                className="fas fa-plus text-2xl md:text-xl sm_xl:text-xl text-white-500"
                                aria-hidden="true"
                            ></i>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Добавить пользователя</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )
    );
};

export default AddNew;
