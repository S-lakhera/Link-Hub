import LinkCard from "./LinkCard";

const LinksList = ({ links }) => {
  return (
    <div className="mt-8 space-y-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
        />
      ))}
    </div>
  );
};

export default LinksList;