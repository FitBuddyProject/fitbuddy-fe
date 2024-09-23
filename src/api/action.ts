/**
 * @description call action api
 */

import api from "./api";

const PREFIX = "/vi/action";

// 상세
export const getDetail = async (payload: any) => {
  return await api.get(`${PREFIX}/${payload.uuid}`);
};

// 액션 히스토리
export const getHistories = async () => {
  return await api.get(`${PREFIX}/histories`);
};

// 캘린더
export const getCalendar = async () => {
  return await api.get(`${PREFIX}/calendar`);
};

// 액션/운동 시작
export const startAction = async (payload: any) => {
  return await api.post(`${PREFIX}/start`, payload);
};

// 액션/운동 취소
export const cancelAction = async () => {
  return await api.delete(`${PREFIX}/cancel`);
};

// 액션/운동 종료
export const finishAction = async (payload: any) => {
  return await api.patch(`${PREFIX}/done`);
};
