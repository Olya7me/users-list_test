import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleShowFavorites } from "@/store/slices/userSlice";
import { motion, AnimatePresence } from "framer-motion";

const Favorites: FC = () => {
    const dispatch = useDispatch();

    const favoriteCount = useSelector(
        (state: RootState) =>
            state.users.users.filter((user) => user.liked).length
    );

    const showOnlyFavorites = useSelector(
        (state: RootState) => state.users.showOnlyFavorites
    );

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        className="relative h-9 px-5 py-2 md:h-7 md:px-3 sm_xl:h-7 sm_xl:px-3"
                        onClick={() => dispatch(toggleShowFavorites())}
                    >
                        <i
                            className={`fas ${
                                showOnlyFavorites ? "fa-users" : "fa-heart"
                            } text-2xl md:text-xl sm_xl:text-xl text-white-500 transition-all duration-300`}
                            aria-hidden="true"
                        ></i>
                        {!showOnlyFavorites && favoriteCount > 0 && (
                            <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full h-5 flex items-center justify-center overflow-hidden w-6">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={favoriteCount}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute"
                                    >
                                        {favoriteCount}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {showOnlyFavorites
                            ? "Показать всех пользователей"
                            : "Показать избранное"}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default Favorites;
