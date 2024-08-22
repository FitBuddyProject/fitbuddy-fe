import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/slices/header";
import { MyInfoContainer, MyInfoWrapper, MyInfoBodySect, MyInfoFooterSect, MyInfoHeaderSect } from "./MyInfo.styles";
import { Button } from "../../components/common/Button";

const MyInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerActions.setTitle("개인정보"));

    }, []);
    return (
        <main>
            <MyInfoWrapper>
                <MyInfoContainer>
                    <MyInfoHeaderSect>달라는 사자</MyInfoHeaderSect>
                    <MyInfoBodySect>휴대폰</MyInfoBodySect>
                    <MyInfoFooterSect>
                        <Button type="button" color="primary" size="large" onClick={()=>{}}>
                            정보수정하기
                        </Button>
                    </MyInfoFooterSect>
                </MyInfoContainer>
            </MyInfoWrapper>
        </main>
    )
}

export default MyInfo