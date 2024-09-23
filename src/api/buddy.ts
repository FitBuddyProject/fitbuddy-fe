import api from "./api";

export const fetchBuddies = async () => {
  return await api.get(`/v1/buddy/`);
};
