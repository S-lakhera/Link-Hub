import { ExternalLink } from "lucide-react";
import useAuth from "../../../hooks/useAuth";

const DashboardHero = () => {
    const { user } = useAuth();

    return (
        <div
            className="
      rounded-[32px]
      p-8 md:p-10
      bg-gradient-to-r
      from-indigo-600
      via-blue-600
      to-cyan-500
      text-white
      shadow-2xl
      overflow-hidden
      relative
    "
        >
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
                <h1 className="font-sora text-4xl md:text-5xl font-black">
                    Welcome back, {user?.name}
                </h1>

                <p className="mt-3 text-white/80 text-lg">
                    Manage your links, track clicks and grow your online presence.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur rounded-full px-5 py-3">
                        linkhub.com/{user?.username}
                    </div>

                    <a
                        href={`/${user?.username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
            bg-white
            text-slate-900
            px-5
            py-3
            rounded-full
            font-semibold
            flex
            items-center
            gap-2
          "
                    >
                        View Profile
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DashboardHero;