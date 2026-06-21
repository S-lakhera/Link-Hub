import axiosInstance from "../../../api/axiosInstance";

export const updateProfile = async (
  profileData
) => {
  const response =
    await axiosInstance.patch(
      "/auth/profile",
      profileData
    );

  return response.data;
};