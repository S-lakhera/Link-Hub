import {
  Link2,
  MousePointerClick,
  Star,
} from "lucide-react";

const DashboardStats = ({ links }) => {

  const totalLinks = links.length;

  const totalClicks = links.reduce(
      (sum, link) =>
        sum + link.clicks,
      0
    );

  const featuredLink = links.find(
      (link) =>
        link.isFeatured
    );

  return (
    <div className="bg-white rounded-4xl shadow-lg p-8">
      <h2 className="font-bold text-xl">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-3 gap-8 mt-8">
        <div>
          <Link2 size={24} />

          <h3 className="text-3xl font-black mt-3">
            {totalLinks}
          </h3>

          <p className="text-slate-500">
            Total Links
          </p>
        </div>

        <div>
          <MousePointerClick size={24} />

          <h3 className="text-3xl font-black mt-3">
            {totalClicks}
          </h3>

          <p className="text-slate-500">
            Total Clicks
          </p>
        </div>

        <div>
          <Star size={24} />

          <h3 className="text-xl font-black mt-3">
            {featuredLink?.title || "None"}
          </h3>

          <p className="text-slate-500">
            Featured Link
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;