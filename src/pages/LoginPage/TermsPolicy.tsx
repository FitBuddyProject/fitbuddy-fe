import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, Fragment } from "react";

import { headerActions } from "../../store/slices/header";
import { PolicyWrapper, PolicyText } from './TermsPolicy.styles';

const TermsPolicy = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("이용 약관 "));
    }, [dispatch]);

    const text =
        `대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다. \n
        모든 국민은 양심의 자유를 가진다. 대한민국은 민주공화국이다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다. \n
        외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다. \n
        농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다.`;

    return (
        <PolicyWrapper>
            <PolicyText>{text}</PolicyText>
        </PolicyWrapper>
    );

};

export default TermsPolicy;
