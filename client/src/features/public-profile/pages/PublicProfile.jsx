import { useParams } from "react-router";

import ProfileBackground from "../components/ProfileBackground";
import ProfileHeader from "../components/ProfileHeader";
import SocialLinks from "../components/SocialLinks";
import FeaturedLink from "../components/FeaturedLink";
import LinksList from "../components/LinksList";

import usePublicProfile from "../hooks/usePublicProfile";

const PublicProfile = () => {
    const { username } = useParams();

    const {
        profile,
        links,
        loading,
        error,
    } = usePublicProfile(username);

    const featuredLink = links.find(
        (link) => link.isFeatured
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                {error}
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
            <ProfileBackground />

            <div className="relative z-10 max-w-7xl mx-10 px-4 md:px-6 pt-15">
                <div className="grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-12">

                    {/* Left Section */}
                    <aside className="md:sticky lg:top-40 h-fit">
                        <ProfileHeader profile={profile} />

                        <SocialLinks socials={profile.socials} />
                    </aside>

                    {/* Right Section */}
                    <section>
                        <FeaturedLink
                            link={featuredLink}
                        />

                        <LinksList links={links} />

                    </section>

                </div>
                <div className="mt-20 text-center">
                    <a
                        href="/"
                        className="text-sm text-slate-500 hover:text-slate-900 transition"
                    >
                        Made with LinkHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PublicProfile;