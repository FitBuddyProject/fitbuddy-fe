import React, { useEffect, useState } from "react";
import {
    FitdexWrapper,
    FitdexContainer,
    FitdexRow,
    FitdexRowHeader,
    FitdexRowBody,
    FitdexRowDescription, FitdexImageRow
} from "./Fitdex.styled";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/slices/header";
import { dummyFits } from "./Fitdex.dummy";

interface FitdexProps {

}

const Fitdex: React.FC<FitdexProps> = () => {
    const [] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("나의 도감"));
    }, [dispatch]);

    return (
        <main>
            <FitdexWrapper>
                <FitdexContainer>
                    {
                        dummyFits.map((item, index) => (
                            <FitdexRow key={index}>
                                <FitdexRowHeader><p>{item?.fitName}</p></FitdexRowHeader>
                                <FitdexRowBody>
                                        {item?.fitImage.map((image, index) => (
                                            <FitdexImageRow tag={`${index + 1}`}>
                                                <div className="image-tag">
                                                    <p>{`LV${index + 1}`}</p>
                                                </div>
                                                <img
                                                    src={image}
                                                    alt="Random"
                                                    width="98"
                                                    height="98"
                                                    key={`image-${index + 1}`}
                                                />
                                            </FitdexImageRow>
                                        ))}
                                </FitdexRowBody>
                                <FitdexRowDescription>
                                    <p>
                                        {item?.fitDescription}
                                    </p>
                                </FitdexRowDescription>
                            </FitdexRow>
                        ))
                    }
                </FitdexContainer>
            </FitdexWrapper>
        </main>
    );
};

export default Fitdex;