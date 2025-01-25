import { FC } from "react";
import { Social } from "../types/socials.type";

interface SocialsProps {
    socials: Social[];
}
const Socials: FC<SocialsProps> = ({ socials }) => {
    if (!socials) {
        return null;
    }

    return (
        <ul className="flex justify-center gap-5">
            {socials.map(({ id, icon, path }) => (
                <li key={id}>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        <i className={`fab fa-${icon}`} aria-hidden="true" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
