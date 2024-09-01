import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { modalActions, Notification } from "store/slices/modal";

import styled from "styled-components";

const NotificationModal = () => {
    const dispatch = useDispatch();
    const notifications = useSelector((state: RootState) => state.modal.notifications);

    useEffect(() => {
        // 각 팝업을 3초 후에 제거하는 타이머 설정
        const timers = notifications.map((notification) => {
            setTimeout(() => {
                dispatch(modalActions.removeNotificationModal({ id: notification.id }));
            }, 3000);

            // 컴포넌트 언마운트 시 타이머 클리어
            return () => {
                timers.forEach((timer: any) => clearTimeout(timer));
            };
        });
    }, [notifications, dispatch]);

    const handleClose = (id: number) => {
        dispatch(modalActions.removeNotificationModal({ id }));
    };

    return (
        <Container>
            {notifications?.map((notification: Notification) => (
                <div key={notification.id} className="notification">
                    <p>
                        {notification.content}
                        <br />
                        <span className="sub">{notification.subContent}</span>
                    </p>
                    <button onClick={() => handleClose(notification.id)}>{notification.btnText ? notification.btnText : "닫기"}</button>
                </div>
            ))}
        </Container>
    );
};

export default NotificationModal;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: fixed;
    transform: translate(-50%, 0%);
    bottom: 0;
    left: 50%;
    z-index: 10;

    .notification {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        background-color: ${({ theme }) => theme.color.grey80};
        border-radius: 0.8rem;
        padding: 1.2rem 1.6rem;
        width: 328px;
        height: auto;
        margin-bottom: 1rem;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        color: ${({ theme }) => theme.color.white};
        white-space: pre;
        line-height: 150%;

        .sub {
            font-size: ${({ theme }) => theme.fontSize.xs};
            color: ${({ theme }) => theme.color.white};
            opacity: 0.7;
        }
    }

    button {
        color: ${({ theme }) => theme.color.white};
        text-decoration: underline;
        line-height: 150%;
    }
`;
