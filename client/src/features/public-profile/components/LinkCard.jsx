import {
    ArrowUpRight,
} from "lucide-react";

import { trackLinkClick } from "../api/profile.api";

const LinkCard = ({ link }) => {
    const handleClick = async () => {
        try {
            await trackLinkClick(link._id);
        } catch (error) {
            console.log(error);
        }

        window.open(
            link.url,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <button
            onClick={handleClick}
            className="
                group
                block
                w-full
                rounded-3xl
                bg-white
                p-5
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
                text-left
            "
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg">
                        {link.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        {link.description}
                    </p>
                </div>

                <ArrowUpRight
                    size={18}
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                    "
                />
            </div>
        </button>
    );
};

export default LinkCard;