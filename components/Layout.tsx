import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;

    const isHomePage = pathname === "/";
    const isErrorPage = pathname === "/404";

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {!isHomePage && !isErrorPage && <BreadcrumbComponent />}
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default Layout;
