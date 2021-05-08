import { Route, Redirect } from 'react-router-dom';
import { IPrivateRoute } from './types';

const PrivateRoute = ({ children, ...props } : IPrivateRoute) => {
  if(!(sessionStorage.getItem('user'))) {
    return (<Redirect to="/auth" />);
  }

  return (<Route {...props} > { children } </Route>);
}
export default PrivateRoute;
