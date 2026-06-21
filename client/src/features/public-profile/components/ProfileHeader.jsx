const ProfileHeader = ({ profile }) => {
    return (
        <div className="text-center">
            <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl animate-float"
            />

            <h1 className="mt-6 text-4xl font-black">
                {profile.name}
            </h1>

            <p className="mt-2 text-lg font-semibold text-blue-600">
                @{profile.username}
            </p>

            <p className="mt-4 text-slate-600 max-w-md mx-auto">
                {profile.bio}
            </p>

            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-white shadow">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium">
                    Available for opportunities
                </span>
            </div>
        </div>
    );
};

export default ProfileHeader;