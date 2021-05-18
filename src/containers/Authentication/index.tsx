import { useCallback, useState } from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const changeView = useCallback((e) => {
    e.stopPropagation();
    setIsSignIn(prev => !prev)
  }, []);

  return (isSignIn ? <SignIn changeView={changeView} />: <SignUp changeView={changeView} />);
}


export default Authentication;
