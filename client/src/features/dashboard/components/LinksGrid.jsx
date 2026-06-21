import LinkManagementCard from "./LinkManagementCard.jsx";

const LinksGrid = ({links, removeLink, featureLink, onEdit}) => {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-3xl font-black font-sora">
                    Manage Links
                </h2>

                <p className="text-slate-500 mt-1">
                    Create, edit and track your links.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {links.map((link) => (
                    <LinkManagementCard
                        key={link._id}
                        link={link}
                        removeLink={removeLink}
                        featureLink={featureLink}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default LinksGrid;