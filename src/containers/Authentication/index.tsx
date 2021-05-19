import { useCallback, useEffect, useState } from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { remove as removeToken } from "../../utils/token";
import { remove as removeGameId } from "../../utils/gameId";

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const changeView = useCallback((e) => {
    e.stopPropagation();
    setIsSignIn(prev => !prev)
  }, []);

  useEffect(() => {
    removeToken();
    removeGameId();
  }, [])

  return (isSignIn ? <SignIn changeView={changeView} />: <SignUp changeView={changeView} />);
}


export default Authentication;
