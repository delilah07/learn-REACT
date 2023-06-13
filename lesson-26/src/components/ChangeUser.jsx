import UserContext from '../context/UserContex';
import { useContext } from 'react';

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser(user === 'Bogdan' ? 'Irena' : 'Bogdan')}>
      Change User
    </button>
  );
};

export default ChangeUser;
