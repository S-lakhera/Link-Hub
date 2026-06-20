import ProfileBackground from "../components/ProfileBackground";
import ProfileHeader from "../components/ProfileHeader";
import SocialLinks from "../components/SocialLinks";
import FeaturedLink from "../components/FeaturedLink";
import LinksList from "../components/LinksList";

const PublicProfile = () => {
    const profile = {
        name: "Shashank Lakhera",
        username: "shashank",
        bio: "Full Stack Developer | MERN Stack | Building products on the internet",

        avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        socials: {
            github: "#",
            linkedin: "#",
            youtube: "#",
            instagram: "#",
        },

        featuredLink: {
            title: "Portfolio",
            description: "Explore my projects and experience",
            url: "#",
        },

        links: [
            {
                id: 1,
                title: "GitHub",
                description: "Open source projects",
                url: "#",
            },
            {
                id: 2,
                title: "LinkedIn",
                description: "Professional profile",
                url: "#",
            },
            {
                id: 3,
                title: "Resume",
                description: "Download latest resume",
                url: "#",
            },
            {
                id: 4,
                title: "YouTube",
                description: "Coding and development content",
                url: "#",
            },
        ],
    };

    return (
        <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
            <ProfileBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-10 ">
                <div className="grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-12">

                    {/* Left Section */}
                    <aside className="md:sticky lg:top-40 h-fit">
                        <ProfileHeader profile={profile} />

                        <SocialLinks socials={profile.socials} />
                    </aside>

                    {/* Right Section */}
                    <section>
                        <FeaturedLink
                            link={profile.featuredLink}
                        />

                        <LinksList links={profile.links} />

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