import Link from "next/link";
import { FC } from "react";
const Header: FC = () => {
    return (
        <header className="w-full h-16 container mx-auto p-5 bg-primary text-primary-foreground flex items-center justify-between shadow-md mb-3">
            <Link href="/">
                <h1 className="logo">Users-list</h1>
            </Link>
        </header>
    );
};

export default Header;
