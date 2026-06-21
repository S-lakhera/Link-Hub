import {
    Pencil,
    Trash2,
    Star,
    MousePointerClick,
} from "lucide-react";

const LinkManagementCard = ({
    link,removeLink, featureLink
}) => {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">
                            {link.title}
                        </h3>

                        {link.isFeatured && (
                            <span
                                className=" bg-yellow-100  text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold  "
                            >
                                Featured
                            </span>
                        )}
                    </div>

                    <p className="mt-2 text-slate-500">
                        {link.description}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        github.com/S-lakhera
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-slate-500">
                <MousePointerClick size={16} />
                <span className="font-semibold">
                    {link.clicks}
                </span>
                <span>clicks</span>
            </div>

            <div className="flex gap-3 mt-6">
                <button className="p-2 rounded-lg bg-slate-100">
                    <Pencil size={16} />
                </button>

                <button 
                onClick={() => featureLink(link._id)}
                className="p-2 rounded-lg bg-slate-100">
                    <Star size={16} />
                </button>

                <button
                onClick={() => removeLink(link._id)}
                className="p-2 rounded-lg bg-red-100 text-red-500">
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
};

export default LinkManagementCard;