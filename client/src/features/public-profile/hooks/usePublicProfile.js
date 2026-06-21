import { useEffect, useState } from "react";
import { getPublicProfile } from "../api/profile.api";

const usePublicProfile = (username) => {
    const [profile, setProfile] = useState(null);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] =
        useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);

                const response =
                    await getPublicProfile(
                        username
                    );

                setProfile(response.user);
                setLinks(response.links);
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Something went wrong"
                );
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchProfile();
        }
    }, [username]);

    return {
        profile,
        links,
        loading,
        error,
    };
};

export default usePublicProfile;