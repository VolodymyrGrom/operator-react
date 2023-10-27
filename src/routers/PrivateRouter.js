import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  const USER_ID = useSelector((state) => state.USER_ID);
  const workplaceId = useSelector((state) => state.workplace.id);
  const serviceCenterId = useSelector((state) => state.serviceCenter.id);
  if (USER_ID && workplaceId && serviceCenterId) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
