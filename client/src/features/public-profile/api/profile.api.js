import axiosInstance from "../../../api/axiosInstance";

export const getPublicProfile = async (username) => {

    const response = await axiosInstance.get(
        `/auth/profile/${username}`
    );

    return response.data;
};

export const trackLinkClick = async (linkId) => {
    const response = await axiosInstance.patch(
        `/links/${linkId}/click`
    )

    return response.data;
};