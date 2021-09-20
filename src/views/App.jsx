import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/userAction";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="App">
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
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
