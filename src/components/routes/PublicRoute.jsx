import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const PublicRoute = ({ children }) => {
  const { isLoading } = useSelector(state => state.session);
  const accessToken = localStorage.getItem('TOKEN')
  const location = useLocation();
  const fromLocation = (location.state)?.from;
  const prevLocation = fromLocation || { pathname: '/' }

  if (!accessToken && !isLoading) {
    return children
  } else if (isLoading) {
    return <p>Loading...</p>
  } else if (accessToken && !isLoading) {
    return <Navigate to={prevLocation} state={{from: location}} replace/>;
  }

  return (
    <p>Something went wrong</p>
  )
}

export default PublicRoute