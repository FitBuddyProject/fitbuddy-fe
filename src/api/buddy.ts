import api from "./api"

export const fetchBuddies = async () => {
  return await api.get(`/buddy/123`)
}