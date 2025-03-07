import Socials from "./Socials";
import { socials } from "../data/socials";
import { FC } from "react";
const Footer: FC = () => {
    return (
        <footer className="w-full h-16 px-4 bg-primary text-primary-foreground flex items-center justify-center mt-auto gap-5">
            <h1 className="sm_xl:text-xs md:text-xs">Created by @olya7me</h1>
            <Socials socials={socials} />
        </footer>
    );
};

export default Footer;
