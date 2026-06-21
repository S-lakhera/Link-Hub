import LinkCard from "./LinkCard";

const LinksList = ({ links }) => {
  const nonFeaturedLinks = links.filter(
    (link) => !link.isFeatured
  );

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