import { useState } from "react";

import { updateProfile } from "../api/profile.api";

const useProfile = () => {
  const [loading, setLoading] =
    useState(false);

  const updateUserProfile =
    async (data) => {
      try {
        setLoading(true);

        const response =
          await updateProfile(data);

        return response;
      } catch (error) {
        console.log(error);

        throw error;
      } finally {
        setLoading(false);
      }
    };

  return {
    loading,
    updateUserProfile,
  };
};

export default useProfile;