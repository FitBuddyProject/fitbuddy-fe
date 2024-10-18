import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "components/common/Button";
import {
  TopSect,
  SelectBuddyWrapper,
  Title,
  BottomSect,
  NameSect,
  InputBox,
  Validation,
  CharactersSect,
  HintWrapper,
  Subtitle,
} from "./SelectBuddy.styles";
import { headerActions } from "../../store/slices/header";
import main from "../../../.storybook/main";
import { signin, signup } from "../../api/user";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { setAuthorizationHeader } from "../../api/api";
import { authActions } from "../../store/slices/auth/auth.slice";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import BuddyComponent from "components/BuddyComponent";
import { makeFriends } from "api/buddy";

const SelectBuddy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [statePhone, setStatePhone] = useState("");
  const [stateNickname, setStateNickname] = useState("");
  const [stateBuddy, setStateBuddy] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const characters = [
    { value: "CHICKEN", fileName: "chick_lv_3", bgColor: "#EEF7FF" },
    { value: "OTTER", fileName: "otter_lv_3", bgColor: "#EEFFF5" },
    { value: "MONSTER", fileName: "monster_lv_3", bgColor: "#FFFDEE" },
  ];

  useEffect(() => {
    dispatch(headerActions.setTitle("캐릭터 선택"));
  }, [dispatch]);

  useEffect(() => {
    const phone = localStorage.getItem("temp_phone");
    if (phone) {
      setStatePhone(phone);
    }
  }, []);

  const handleClickNext = async () => {
    // sign-up 하기
    const payload = {
      phone: statePhone,
      nickname: stateNickname,
      password: "1q2w3e4r!",
    };
    try {
      const res = await signup(payload);
      console.log(123, res);
      if (res.status === 200) {
        // 회원가입 성공
        const { headers, data } = res;
        setAuthorizationHeader(headers.authorization);
        localStorage.setItem("authToken", headers.authorization);

        // 캐릭터 생성
        createBuddy(data.uuid);

        // store에 user data 저장
        dispatch(authActions.loginRequestSuccess(data));
        navigate("/");
      }
    } catch (error: any) {
      enqueueSnackbar(error?.response?.data, {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    }
  };

  const handleInput = (payload: { value: string }) => {
    setStateNickname(payload?.value);
  };

  const createBuddy = async (uuid: string) => {
    const payload = {
      userUuid: uuid,
      name: stateNickname,
      buddy: stateBuddy,
    };
    await makeFriends(payload);
  };

  return (
    <main>
      <SelectBuddyWrapper>
        <TopSect>
          <Title>캐릭터를 선택해주세요 </Title>
          <Subtitle>함께 운동을 시작할 캐릭터를 선택해주세요.</Subtitle>
        </TopSect>

        <NameSect className="name-sect">
          <InputBox
            type="text"
            placeholder={"캐릭터에게 이름을 지어주세요!"}
            onChange={(event) => handleInput({ value: event.target.value })}
          />
          <Validation>유효성 문구 노출 영역</Validation>
        </NameSect>

        <CharactersSect>
          <Swiper slidesPerView={"auto"} centeredSlides={true} spaceBetween={20} className="mySwiper">
            {characters.map((item) => (
              <SwiperSlide
                key={item.value}
                style={{ background: item.bgColor }}
                onClick={() => {
                  setStateBuddy(item.value);
                  setIsSelected(true);
                }}
              >
                <div className="box">
                  <BuddyComponent fileName={item.fileName} isComponent={true} isShowLabel={false} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CharactersSect>

        <BottomSect>
          <HintWrapper>
            <p>!&nbsp; 캐릭터는 한 번 정하면 바꿀 수 없어요!</p>
            <p>&nbsp;&nbsp; 대신 특정 레벨 달성 시 다른 캐릭터를 골라서 육성할 수 있어요!</p>
          </HintWrapper>
          <Button type="button" color="primary" size="large" onClick={handleClickNext} disabled={!isSelected}>
            Fit Buddy 시작하기
          </Button>
        </BottomSect>
      </SelectBuddyWrapper>
    </main>
  );
};

export default SelectBuddy;
