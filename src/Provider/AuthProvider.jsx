import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{

        return  createUserWithEmailAndPassword(auth,email,password)
    }



    const authInfo={
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;