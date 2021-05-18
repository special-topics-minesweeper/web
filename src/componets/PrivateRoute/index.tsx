import { Route, Redirect } from 'react-router-dom';
import { IPrivateRoute } from './types';
import { get as getToken } from "../../utils/token";

const PrivateRoute = ({ children, ...props } : IPrivateRoute) => {
  if(!getToken()) {
    return (<Redirect to="/auth" />);
  }

  return (<Route {...props} > { children } </Route>);
}
export default PrivateRoute;
