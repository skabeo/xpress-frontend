import React from 'react'
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
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout