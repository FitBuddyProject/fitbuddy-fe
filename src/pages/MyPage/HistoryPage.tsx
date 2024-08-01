import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store/store";
import { headerActions } from "store/slices/header";
import { HistoryListProps } from "store/slices/history/history.slice";

import Icon from "components/common/Icon";
import { IconBox, ListItem } from "./HistoryPage.styles";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const historyList = useSelector((state: RootState) => state.history.historyList);

  useEffect(() => {
    dispatch(headerActions.setTitle("행동기록"));
  }, [dispatch]);

  useEffect(() => {
    // TODO :: 무한 스크롤 적용
  }, []);

  return (
    <main>
      <ul>
        {historyList.map((item: HistoryListProps) => (
          <ListItem key={item.id}>
            <div className="left">
              <IconBox>
                <Icon icon="LiftingWeights" />
              </IconBox>
              <div className="text">
                <span className="action">운동하기</span>
                <span className="date">{item.date}</span>
              </div>
            </div>
            <div className="right">
              {item.mp && (
                <span className="mp">
                  경험치 {item.mp > 0 ? "+" : ""}
                  {item.mp}%
                </span>
              )}
              {item.hp && (
                <span className="hp">
                  피로도 {item.hp > 0 ? "+" : ""}
                  {item.hp}%
                </span>
              )}
            </div>
          </ListItem>
        ))}
      </ul>
    </main>
  );
};

export default HistoryPage;
