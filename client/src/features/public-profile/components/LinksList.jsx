import { Link2, Sparkles } from "lucide-react";
import LinkCard from "./LinkCard";

const LinksList = ({ links }) => {
  const nonFeaturedLinks = links.filter(
    (link) => !link.isFeatured
  );

  if (nonFeaturedLinks.length === 0) {
    return (
      <div
        className="
          mt-8
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white/70
          backdrop-blur-sm
          p-10
          text-center
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-slate-100
          "
        >
          <Link2
            size={28}
            className="text-slate-500"
          />
        </div>

        <h3 className="mt-5 text-xl font-bold">
          No links added yet
        </h3>

        <p className="mt-2 text-slate-500 max-w-md mx-auto">
          This profile doesn't have any public
          links right now. Check back later or
          connect with the creator through their
          social profiles.
        </p>

        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-50
            px-4
            py-2
            text-sm
            text-blue-600
            font-medium
          "
        >
          <Sparkles size={16} />
          More links coming soon
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {nonFeaturedLinks.map((link) => (
        <LinkCard
          key={link._id}
          link={link}
        />
      ))}
    </div>
  );
};

export default LinksList;