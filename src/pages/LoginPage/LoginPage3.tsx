import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { authActions } from "../../store/slices/auth/auth.slice";
import { useEffect, useMemo, Fragment } from "react";
import { Button } from "components/common/Button";
import {
    TopSect,
    LoginWrapper,
    Title,
    BottomSect,
    NameSect, InputBox, Validation, CharactersSect, HintWrapper
} from "./LoginPage3.styles";
import { headerActions } from "../../store/slices/header";
import { Subtitle } from "./LoginPage.styles";
import Icon from "../../components/common/Icon";


const LoginPage3 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("캐릭터 선택"));
    }, [dispatch]);


    const handleClickNext = () => {
        console.log('handleClickNext:: ');
    };

    return (
        <LoginWrapper>
            <TopSect>
                <Title>캐릭터를 선택해주세요 </Title>
                <Subtitle>함께 운동을 시작할 캐릭터를 선택해주세요.</Subtitle>
            </TopSect>


            <NameSect className="name-sect">
                <InputBox type="text"/>
                <Validation>
                    유효성 문구 노출 영역
                </Validation>
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

        </LoginWrapper>
    );
};

export default LoginPage3;
