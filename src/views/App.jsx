import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleClick = (id) => {
    history.push(`/user/${id}`);
  };

  return (
    <div className="App">
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} onClick={() => handleClick(user.id)}>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
