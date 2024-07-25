import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "store/slices/header";

const MyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerActions.setTitle("마이페이지"));
  }, [dispatch]);
  return <div>My Page</div>;
};

export default MyPage;
