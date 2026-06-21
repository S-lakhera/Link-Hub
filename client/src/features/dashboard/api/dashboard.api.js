import axiosInstance from "../../../api/axiosInstance";

export const getMyLinks = async () => {
  const response = await axiosInstance.get("/links");
  return response.data;
};

export const createLink = async (data) => {
  const response = await axiosInstance.post(
    "/links",
    data
  );

  return response.data;
};

export const updateLink = async (
  id,
  data
) => {
  const response =
    await axiosInstance.patch(
      `/links/${id}`,
      data
    );

  return response.data;
};

export const deleteLink = async (id) => {
  const response =
    await axiosInstance.delete(
      `/links/${id}`
    );

  return response.data;
};

export const makeFeaturedLink =
  async (id) => {
    const response =
      await axiosInstance.patch(
        `/links/${id}/feature`
      );

    return response.data;
  };