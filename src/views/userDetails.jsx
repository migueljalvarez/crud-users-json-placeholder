import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";

const userDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {user.id ? (
        <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default userDetails;
