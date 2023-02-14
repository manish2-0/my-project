import react,{useState} from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
    const [auth, setauth] = useState({});

  return (
    <AuthContext.Provider value={{auth,setauth}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;