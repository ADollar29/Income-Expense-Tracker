import { createContext, useReducer }from "react";
import axios from 'axios';
//auth context

export const authContext = createContext();

const INITIAL_STATE = {
    userAuth: null,
    error: null,
    loading: false,
    profile: null,
};
//Create the Auth reducer

const reducer = (state, action)=>{
    return{};
};
//Provider (high order componenet)

const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer((reducer, INITIAL_STATE));

    //login action
    const loginUserAction = async(formData)=>{
        const config = {
            header:{
                "Content-Type":"application/json"
            },
        };
    try {
      const res = await axios.post(
      "http://localhost:9000/api/v1/users/login", 
      formData, 
      config
      );
      console.log(res);
    } catch (error) {
        console.log(error);
    } 
    };
    return(
    <authContext.Provider 
    value={{
            loginUserAction,
         }}
    >
        {children}
    </authContext.Provider>
    );
};

export default AuthContextProvider;