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


interface FitdexProps {

}


const indexDescription = [
    '님들 저 하츄핑 MBTI 에서 하츄핑 나왔습니다 !! 이거 하츄핑 극장판 보러갈 각입니다! ',
    '궁예왕 그 자가, 미치지 않고서야 어떻게 수달이를.. 그렇게 참혹하게 죽일 수가 있단 말인가..',
    '이상이는 이가 자주 상합니다. 보이는 두개의 이빨은 사실 이빨이 아니라, 눈입니다 !',
];

const importAll = (r: any) => {
    return r.keys().map((key: any) => {
        const path = r(key);
        const name = key.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
        return { path, name };
    });
};

// @ts-ignore
const images = importAll(require.context('assets/images/buddies/', false, /\.(png|jpe?g|svg)$/));


const Fitdex: React.FC<FitdexProps> = () => {
    const dispatch = useDispatch();
    const [buddies, setBuddies] = useState<[]>([]);
    useEffect(() => {
        const modifiedBuddies = images.filter((item: any) => {
            return item.name.split('/').length === 1;
        }).reduce((accumulator: any[], currentValue: any, index: number) => {
            if (index % 3 === 0) {
                accumulator.push([]);
            }
            accumulator[accumulator.length - 1].push(currentValue);
            return accumulator;
        }, []);

        // @ts-ignore
        setBuddies([...modifiedBuddies]);
    }, []);

    useEffect(() => {
        dispatch(headerActions.setTitle("나의 도감"));
    }, [dispatch]);

    return (
        <main>
            <FitdexWrapper>
                <FitdexContainer>
                    {
                        buddies.map((item: any, index) => (
                            <FitdexRow key={index}>
                                <FitdexRowHeader><p>{item[0].name.split("-")[0]}</p></FitdexRowHeader>
                                <FitdexRowBody>
                                    {item.map((item2: any, index2: any) => (
                                        <FitdexImageRow tag={`${index2 + 1}`} key={index2}>
                                            <div className="image-tag">
                                                <p>{`LV${index2 + 1}`}</p>
                                            </div>
                                            <img
                                                src={item2.path}
                                                alt="Random"
                                                width="98"
                                                height="98"
                                                key={`image-${index + 1}`}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </FitdexImageRow>
                                    ))}

                                </FitdexRowBody>
                                <FitdexRowDescription>
                                    <p>
                                        {indexDescription[index]}
                                        {/*{item?.fitDescription}*/}
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