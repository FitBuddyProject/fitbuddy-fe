/**
 * @description call action api
 */

import api from "./api";

const PREFIX = "/v1/buddy";

// 내 버디 리스트
export const getBuddies = async ({ uuid }: { uuid: string }) => {
  return await api.get(`${PREFIX}/${uuid}`);
};

// 버디 추가
export const makeFriends = async (payload: any) => {
  return await api.post(`${PREFIX}/make-friends`, payload);
};

// 버디 도감
export const getDictionary = async ({ uuid }: { uuid: string }) => {
  return await api.get(`${PREFIX}/${uuid}/dictionary`);
};

// 메인 버디 변경
export const changeBuddy = async (payload: any) => {
  return await api.patch(`${PREFIX}/see-ya`);
};

// 경험치 조정
export const earnExp = async () => {
  return await api.patch(`${PREFIX}/earn-exp`);
};
