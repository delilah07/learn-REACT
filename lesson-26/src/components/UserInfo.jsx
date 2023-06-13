import UserContext from '../context/UserContex';
import { useContext } from 'react';

const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
    <h1>{user}</h1>
  );
};

export default UserInfo;
