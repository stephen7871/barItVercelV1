import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData, router, user, setUser) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
   
    localStorage.setItem("name", JSON.stringify(formData));
    // setUser(JSON.parse(localStorage.getItem('name')))
    router("/Home/Blog")
   //router.push("/Home");
    // setUser()
    
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router, user, setUser) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    
    localStorage.setItem("name", JSON.stringify(formData));
    // setUser(JSON.parse(localStorage.getItem('name')))
    router("/Home/Blog")
  } catch (error) {
    console.log(error);
    
  }
};
