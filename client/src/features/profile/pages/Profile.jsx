import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Save } from "lucide-react";
import useProfile from "../hooks/useProfile";


const Profile = () => {
    const { user } = useAuth();
    const { loading, updateUserProfile } = useProfile()

    const {
        register,
        watch,
        reset,
        handleSubmit,
    } = useForm();

    useEffect(() => {
        if (user) {
            reset({
                avatar: user.avatar || "",
                name: user.name || "",
                username: user.username || "",
                bio: user.bio || "",

                github:
                    user.socials?.github || "",

                linkedin:
                    user.socials?.linkedin || "",

                youtube:
                    user.socials?.youtube || "",

                instagram:
                    user.socials?.instagram || "",

                twitter:
                    user.socials?.twitter || "",
            });
        }
    }, [user, reset]);

    const avatarPreview = watch("avatar");

    const onSubmit = async (data) => {

        try {
            await updateUserProfile({
                avatar: data.avatar,
                name: data.name,
                username: data.username,
                bio: data.bio,

                socials: {
                    github: data.github,
                    linkedin: data.linkedin,
                    youtube: data.youtube,
                    instagram: data.instagram,
                    twitter: data.twitter,
                },
            });

            alert(
                "Profile updated successfully"
            );
        } catch (error) {
            alert(
                error.response?.data?.message || "Failed to update profile"
            );
        }

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Hero */}

                <div
                    className="
            rounded-[32px]
            p-8
            bg-gradient-to-r
            from-indigo-600
            via-blue-600
            to-cyan-500
            text-white
            shadow-xl
          "
                >
                    <h1 className="font-sora text-4xl font-black">
                        Profile Settings
                    </h1>

                    <p className="mt-2 text-white/80">
                        Manage your public profile.
                    </p>
                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="
            mt-8
            bg-white
            rounded-[32px]
            shadow-lg
            p-8
            space-y-8
          "
                >
                    {/* Avatar */}

                    <div>
                        <h2 className="font-bold text-xl mb-5">
                            Profile Photo
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <img
                                src={
                                    avatarPreview ||
                                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=500"
                                }
                                alt="avatar"
                                className="
                  h-32
                  w-32
                  rounded-full
                  object-cover
                  border-4
                  border-slate-100
                  shadow-lg
                "
                            />

                            <input
                                {...register("avatar")}
                                placeholder="Paste avatar image URL"
                                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />
                        </div>
                    </div>

                    {/* Basic Info */}

                    <div>
                        <h2 className="font-bold text-xl mb-5">
                            Basic Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />

                            <input
                                {...register("username")}
                                placeholder="Username"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />
                        </div>

                        <textarea
                            {...register("bio")}
                            rows={4}
                            placeholder="Tell people about yourself..."
                            className="
                mt-4
                w-full
                rounded-2xl
                border
                border-slate-300
                px-4
                py-3
              "
                        />
                    </div>

                    {/* Socials */}

                    <div>
                        <h2 className="font-bold text-xl mb-5">
                            Social Links
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                {...register("github")}
                                placeholder="GitHub URL"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />

                            <input
                                {...register("linkedin")}
                                placeholder="LinkedIn URL"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />

                            <input
                                {...register("youtube")}
                                placeholder="YouTube URL"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />

                            <input
                                {...register("instagram")}
                                placeholder="Instagram URL"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />

                            <input
                                {...register("twitter")}
                                placeholder="X URL"
                                className="
                  rounded-2xl
                  border
                  border-slate-300
                  px-4
                  py-3
                "
                            />
                        </div>
                    </div>

                    {/* Save */}

                    <div className="flex justify-end">
                        <button
                            disabled={loading}
                            type="submit"
                            className="
                flex
                items-center
                gap-2
                rounded-full
                bg-slate-900
                text-white
                px-6
                py-3
                hover:scale-105
                transition
              "
                        >
                            <Save size={18} />
                            {loading ? "Saving" : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;