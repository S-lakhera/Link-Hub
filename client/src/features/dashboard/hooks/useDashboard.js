import {
    useEffect,
    useState,
} from "react";

import {
    getMyLinks,
    createLink,
    deleteLink,
    makeFeaturedLink,
} from "../api/dashboard.api";

const useDashboard = () => {
    const [links, setLinks] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchLinks = async () => {
        try {
            const response =
                await getMyLinks();

            setLinks(response.links);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    const addLink = async (payload) => {
        await createLink(payload);

        fetchLinks();
    };

    const removeLink = async (id) => {
        await deleteLink(id);

        fetchLinks();
    };

    const featureLink =
        async (id) => {
            await makeFeaturedLink(id);

            fetchLinks();
        };

    return {
        links,
        loading,

        addLink,
        removeLink,
        featureLink,

        refreshLinks:
            fetchLinks,
    };
};

export default useDashboard;