import { Pin, ArrowUpRight } from "lucide-react";

const FeaturedLink = ({ link }) => {
    if (!link) return null;

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group
  block
  mt-10
  rounded-3xl
  border-2
  border-blue-200
  bg-white
  p-6
  shadow-xl
  hover:shadow-2xl
  hover:-translate-y-1
  transition-all
"
        >
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2 text-blue-600">
                        <Pin size={16} />
                        <span className="font-semibold">
                            Featured
                        </span>
                    </div>

                    <h2 className="mt-2 text-xl font-bold">
                        {link.title}
                    </h2>

                    <p className="mt-1 text-slate-500">
                        {link.description}
                    </p>
                </div>

                <ArrowUpRight
                    className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1"
                />
            </div>
        </a>
    );
};

export default FeaturedLink;