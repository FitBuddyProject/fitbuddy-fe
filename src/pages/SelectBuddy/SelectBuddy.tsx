import { useDispatch } from "react-redux";
import { useEffect } from "react";
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

const SelectBuddy = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("캐릭터 선택"));
    }, [dispatch]);

    const handleClickNext = () => {
        console.log("handleClickNext:: ");
    };

    return (
        <main>
            <SelectBuddyWrapper>
                <TopSect>
                    <Title>캐릭터를 선택해주세요 </Title>
                    <Subtitle>함께 운동을 시작할 캐릭터를 선택해주세요.</Subtitle>
                </TopSect>

                <NameSect className="name-sect">
                    <InputBox type="text" placeholder={"캐릭터에게 이름을 지어주세요!"}/>
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
