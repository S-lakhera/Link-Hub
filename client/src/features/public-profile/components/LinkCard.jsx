import { ArrowUpRight } from "lucide-react";

const LinkCard = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="
        group
        block
        rounded-3xl
        bg-white
        p-5
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
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
    </a>
  );
};

export default LinkCard;