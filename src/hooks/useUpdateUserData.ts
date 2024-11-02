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
    console.log("earnExp :: {}", res);
  };

  // 피로도 업데이트
  const updateTired = async (uuid: string, tired: number) => {
    if (!userData) return;
    const params = { uuid, tired };
    const res = await syncTired(params);
    console.log("handleTired :: {}", res);

    // tired 값 증가
    const updatedTired = Math.max(0, Math.min(userData.tired + 1, 100));
    const updatedData = { ...userData, tired: updatedTired };

    // 변경된 데이터 다시 localStorage에 저장
    localStorage.setItem("userData", JSON.stringify(updatedData));
    dispatch(authActions.setUserData(updatedData));
  };

  const updateActionCount = (type: string) => {
    let updatedData = { ...userData };
    if (type === "EXERCISE") {
      userData = { ...userData, exerciseCount: userData.exerciseCount + 1 };
    } else if (type === "SHOWER") {
      userData = { ...userData, exerciseCount: userData.showerCount + 1 };
    } else if (type === "TALK") {
      userData = { ...userData, exerciseCount: userData.talkCount + 1 };
    } else if (type === "SLEEP") {
      userData = { ...userData, exerciseCount: userData.sleepCount + 1 };
    } else if (type === "PET") {
      userData = { ...userData, exerciseCount: userData.petCount + 1 };
    }
    localStorage.setItem("userData", JSON.stringify(updatedData));
    dispatch(authActions.setUserData(updatedData));
  };

  return { updateExp, updateTired, updateActionCount };
};

export default useUpdateUserData;
