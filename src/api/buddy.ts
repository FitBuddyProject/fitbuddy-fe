/**
 * @description call action api
 */

import api from "./api";

const PREFIX = "/vi/buddy";

// 내 버디 리스트
export const getBuddies = async (payload: any) => {
  return await api.get(`${PREFIX}/${payload.userUuid}`);
};

// 버디 추가
export const makeFriends = async (payload: any) => {
  return await api.post(`${PREFIX}/make-friends`, payload);
};

// 버디 도감
export const getDictionary = async (payload: any) => {
  return await api.get(`${PREFIX}/${payload.userUuid}/dictionary`);
};

// 메인 버디 변경
export const changeBuddy = async (payload: any) => {
  return await api.patch(`${PREFIX}/see-ya`);
};

// 경험치 조정
export const earnExp = async () => {
  return await api.patch(`${PREFIX}/earn-exp`);
};
