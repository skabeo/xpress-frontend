import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import PropTypes from 'prop-types'

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

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute