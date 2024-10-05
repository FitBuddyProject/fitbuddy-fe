/**
 * @description call user api
 */

import api from "./api";

const PREFIX = "/v1/user";

export const sendable = async (payload: any) => {
  return await api.patch(`${PREFIX}/sendable`);
};

export const signin = async (payload: any) => {
  return await api.patch(`${PREFIX}/sign/in`, { phone: payload.phone });
};

export const signout = async (payload: any) => {
  return await api.patch(`${PREFIX}/sign/out`);
};

export const signup = async (payload: any) => {
  return await api.post(`${PREFIX}/sign/up`);
};

export const syncPushToken = async (payload: any) => {
  return await api.patch(`${PREFIX}/sync/push-token`);
};

export const syncTired = async (payload: any) => {
  return await api.patch(`${PREFIX}/sync/tired`);
};

export const verifyPhone = async (payload: any) => {
  return await api.get(`${PREFIX}/verify/phone/${payload.phone}`);
};
