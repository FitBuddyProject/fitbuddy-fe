/**
 * 모달 전역 설정을 위한 포탈
 */

import * as ReactDOM from "react-dom";

interface Props {
    children: React.ReactNode;
}

export const ModalPortal = ({ children }: Props) => {
    const el = document.getElementById("modal-root") as HTMLElement;
    return ReactDOM.createPortal(children, el);
};
