import { useDispatch } from "react-redux";
import { earnExp } from "api/buddy";
import { syncTired } from "api/user";
import { authActions } from "store/slices/auth/auth.slice";
import { levelActions } from "store/slices/level";

const useUpdateUserData = (userData: any) => {
  const dispatch = useDispatch();

  // 경험치 업데이트
  const updateExp = async (uuid: string, exp: number) => {
    const params = { uuid, exp };
    const res = await earnExp(params);
    dispatch(levelActions.gainXP({ exp }));
  };

  // 피로도 업데이트
  const updateTired = async (uuid: string, tired: number) => {
    if (!userData) return;

    let sumTired = tired + userData.tired;
    // 기존 피로도보다 업데이트 될 피로도가 낮을 경우 피로도 0
    if (sumTired <= 0) sumTired = 0;

    const params = { uuid, tired: sumTired };
    const res = await syncTired(params);

    // tired 값 증가
    const updatedTired = Math.max(0, Math.min(sumTired, 100));
    const updatedData = { ...userData, tired: updatedTired };

    // 변경된 데이터 다시 localStorage에 저장
    localStorage.setItem("userData", JSON.stringify(updatedData));
    dispatch(authActions.setUserData(updatedData));
  };

  const updateActionCount = (type: string) => {
    let updatedData = { ...userData };
    if (type === "EXERCISE") {
      userData = { ...userData, exerciseCount: userData.exerciseCount ? userData.exerciseCount + 1 : 1 };
    } else if (type === "SHOWER") {
      userData = { ...userData, showerCount: userData.showerCount ? userData.showerCount + 1 : 1 };
    } else if (type === "TALK") {
      userData = { ...userData, talkCount: userData.talkCount ? userData.talkCount + 1 : 1 };
    } else if (type === "SLEEP") {
      userData = { ...userData, sleepCount: userData.sleepCount ? userData.sleepCount + 1 : 1 };
    } else if (type === "PET") {
      userData = { ...userData, petCount: userData.petCount ? userData.petCount + 1 : 1 };
    }
    localStorage.setItem("userData", JSON.stringify(updatedData));
    dispatch(authActions.setUserData(updatedData));
  };

  return { updateExp, updateTired, updateActionCount };
};

export default useUpdateUserData;
