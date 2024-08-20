import React, { useEffect, useState } from "react";
import {
    FitdexWrapper,
    FitdexContainer,
    FitdexRow,
    FitdexRowHeader,
    FitdexRowBody,
    FitdexRowHint
} from "./Fitdex.styled";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/slices/header";

interface FitdexProps {

}

const Fitdex: React.FC<FitdexProps> = () => {
    const [] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("나의 도감"));
    }, [dispatch]);

    return (
        <FitdexWrapper>
            <FitdexContainer>
                {
                    Array.from({ length: 5 }, () => {
                        return (
                            <FitdexRow>
                                <FitdexRowHeader><p>올망이</p></FitdexRowHeader>
                                <FitdexRowBody>
                                    <div className="image-container">
                                        <img
                                            src="https://picsum.photos/98/98"
                                            alt="Random"
                                            width="98"
                                            height="98"
                                        />
                                        <img
                                            src="https://picsum.photos/98/98"
                                            alt="Random"
                                            width="98"
                                            height="98"
                                        />
                                        <img
                                            src="https://picsum.photos/98/98"
                                            alt="Random"
                                            width="98"
                                            height="98"
                                        />
                                    </div>
                                </FitdexRowBody>
                                <FitdexRowHint>
                                    <p>
                                        볼에 전기를 저장하는 주머니가 있다.
                                        숲을 거처로 삼으며, 단단한 나무열매를 전기로 익혀 먹는 등의 지혜를 가졌다.
                                    </p>
                                </FitdexRowHint>
                            </FitdexRow>
                        );
                    })
                }
            </FitdexContainer>
        </FitdexWrapper>
    );
};

export default Fitdex;