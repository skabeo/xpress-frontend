import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/session/sessionSlice';

const Logout = () => {
  const token = localStorage.getItem('TOKEN');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(logoutUser(token));
    }
  }, [dispatch, token])

  return (
    <div>Logout</div>
  )
}

export default Logout