import DashboardHero from "../components/DashboardHero.jsx";
import DashboardStats from "../components/DashboardStats.jsx";
import CreateLinkForm from "../components/CreateLinkForm.jsx";
import LinksGrid from "../components/LinksGrid.jsx";
import useDashboard from "../hooks/useDashboard.js";

const Dashboard = () => {
    const dashboard = useDashboard();
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50
">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-8">
                <DashboardHero />

                <div className="grid lg:grid-cols-[350px_1fr] gap-8">
                    <DashboardStats links={dashboard.links} />

                    <CreateLinkForm addLink={dashboard.addLink} />
                </div>


                <LinksGrid
                    links={dashboard.links}
                    removeLink={
                        dashboard.removeLink
                    }
                    featureLink={
                        dashboard.featureLink
                    }
                />
            </div>
        </div>
    );
};

export default Dashboard;