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
    Subtitle
} from "./SelectBuddy.styles";
import { headerActions } from "../../store/slices/header";
import main from "../../../.storybook/main";
import { signin, signup } from "../../api/user";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { setAuthorizationHeader } from "../../api/api";
import { authActions } from "../../store/slices/auth/auth.slice";

const SelectBuddy = () => {
    const dispatch = useDispatch();
    const [statePhone, setStatePhone] = useState('');
    const [stateNickname, setStateNickname] = useState('');
    const navigate = useNavigate();

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
            password: '1q2w3e4r!'
        };
        try {
            const res = await signup(payload);
            console.log(123, res);
            if (res.status == 200) {
                // 회원가입 성공
                navigate(`/login`);
            }
        } catch (error: any) {
            enqueueSnackbar(error?.response?.data, {
                variant: 'error',
                autoHideDuration: 3000,
                anchorOrigin: { vertical: "top", horizontal: "center" }
            });
            const params = {
                phone: statePhone
            }
            const { headers, data} = await signin(params);
            setAuthorizationHeader(headers.authorization);
            dispatch(authActions.loginRequestSuccess(data));
            navigate("/");
        }
    };

    const handleInput = (payload: { value: string }) => {
        console.log(payload);
        setStateNickname(payload?.value);
    };


    return (
        <main>
            <SelectBuddyWrapper>
                <TopSect>
                    <Title>캐릭터를 선택해주세요 </Title>
                    <Subtitle>함께 운동을 시작할 캐릭터를 선택해주세요.</Subtitle>
                </TopSect>

                <NameSect className="name-sect">
                    <InputBox type="text" placeholder={"캐릭터에게 이름을 지어주세요!"}
                              onChange={(event) => handleInput({ value: event.target.value })}/>
                    <Validation>유효성 문구 노출 영역</Validation>
                </NameSect>

                <CharactersSect>
                    <div className="character-wrapper"></div>
                </CharactersSect>

                <BottomSect>
                    <HintWrapper>
                        <p>!&nbsp; 캐릭터는 한 번 정하면 바꿀 수 없어요!</p>
                        <p>&nbsp;&nbsp; 대신 특정 레벨 달성 시 다른 캐릭터를 골라서 육성할 수 있어요!</p>
                    </HintWrapper>
                    <Button type="button" color="primary" size="large" onClick={handleClickNext}>
                        Fit Buddy 시작하기
                    </Button>
                </BottomSect>
            </SelectBuddyWrapper>
        </main>
    );
};

export default SelectBuddy;
