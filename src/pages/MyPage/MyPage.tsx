import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { headerActions } from "store/slices/header";
import { RootState } from "store/store";
import { modalActions } from "store/slices/modal";

import Icon from "components/common/Icon";
import Modal from "components/Modal/Modal";
import Toggle from "components/common/Toggle";
import { authActions } from "../../store/slices/auth/auth.slice";

import { Container, NicknameBox, MenuBox, MenuWrap } from "./MyPage.styles";
import { useNavigate } from "react-router-dom";


const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);
    const { showModal } = useSelector((state: RootState) => state.modal);
    const { userData } = useSelector((state: RootState) => state.auth);
    const [idInput, setIdInput] = useState("");
    const [pwInput, setPwInput] = useState("");


    useEffect(() => {
        dispatch(headerActions.setTitle("마이페이지"));
    }, [dispatch]);

    const handleToggle = () => {
        setIsActive((prev) => !prev);

        // TODO :: push api 연결

        if (isActive) {
            pushOn();
        } else {
            pushOff();
        }
    };

    const pushOn = () => {
        dispatch(
            modalActions.pushNotificationModal({
                id: uuidv4(),
                content: `푸시 알림 받는 것에 동의해요.`,
            })
        );
    };

    const pushOff = () => {
        dispatch(
            modalActions.pushNotificationModal({
                id: uuidv4(),
                content: `푸시 알림을 받지 않을래요.\n(행동 완료 알림을 받을 수 없어요.)`,
                btnText: "취소",
            })
        );
    };

    const openModal = () => {
        dispatch(modalActions.openModal());
    };

    // const handleIDInput = (event: any) => {
    //     const { value } = event?.target;
    //     setIdInput(value);
    // };
    //
    // const handlePWInput = (event: any) => {
    //     const { value } = event?.target;
    //     setPwInput(value);
    // };


    const logout = () => {
        console.log('logging out')
        dispatch(modalActions.closeModal());
        dispatch(authActions?.logout());
        navigate("/login");
    };

    const login = () => {
        const payload = {
            id: idInput,
            pw: pwInput,
        };
        dispatch(authActions?.loginRequest(payload));
        dispatch(modalActions.closeModal());
    };

    return (
        <Container>
            {userData
                &&
                <NicknameBox>
                    <h3>{userData?.name}</h3>
                    <button onClick={openModal}>로그아웃</button>
                </NicknameBox>

            }

            <MenuWrap>
                <MenuBox>
                    <Icon icon="IconKey"/>
                    개인 정보
                </MenuBox>
                <MenuBox>
                    <Icon icon="IconBook"/>
                    나의 도감
                </MenuBox>
                <MenuBox>
                    <Icon icon="IconHistory"/>
                    행동 기록
                </MenuBox>
                <MenuBox>
                    <Icon icon="IconNote"/>
                    이용약관
                </MenuBox>
                <MenuBox className="push">
                    푸시 알림
                    <Toggle isActive={isActive} handleChange={handleToggle}/>
                </MenuBox>
            </MenuWrap>
            {showModal &&
				<Modal type="confirm" confirmText="로그아웃" handleConfirm={logout}>
					<h3>로그아웃 하시겠습니까?</h3>
					<div className="content">올망이를 보러 다시 들러주세요.🥲</div>
				</Modal>
            }
        </Container>
    );
};

export default MyPage;
