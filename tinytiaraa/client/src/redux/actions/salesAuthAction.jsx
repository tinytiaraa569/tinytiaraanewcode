import { server } from "@/server";
import axios from "axios";

// Sales Signup
export const salesSignup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "SalesSignupRequest" });

    const { data } = await axios.post(`${server}/saleuser/register`, {
      name,
      email,
      password,
      role: "sales", // Ensuring this user is a sales user
    });

    dispatch({ type: "SalesSignupSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "SalesSignupFail",
      payload: error.response?.data?.message || "Signup Failed",
    });
  }
};

// Sales Login
export const salesLogin = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: "SalesLoginRequest" });
  
      const { data } = await axios.post(`${server}/saleuser/login`, { email, password });
  
      if (data.salesUser.role.toLowerCase() !== "sales") {
        throw new Error("Unauthorized: Only sales users can log in");
      }
  
      // Save token & user in localStorage
      localStorage.setItem("salesToken", data.token);
      localStorage.setItem("salesUser", JSON.stringify(data.salesUser));
  
      dispatch({ type: "SalesLoginSuccess", payload: data.salesUser });
    } catch (error) {
      dispatch({
        type: "SalesLoginFail",
        payload: error.response?.data?.message || "Login Failed",
      });
    }
  };
  
  

// Load Sales User
export const loadSalesUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadSalesUserRequest" });

    const { data } = await axios.get(`${server}/saleuser/getuser`, {
      withCredentials: true,
    });

    if (data.user.role !== "sales") {
      throw new Error("Unauthorized: Only sales users can access this");
    }

    dispatch({ type: "LoadSalesUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "LoadSalesUserFail",
      payload: error.response?.data?.message || "Failed to load user",
    });
  }
};

// Logout
export const salesLogout = () => async (dispatch) => {
  try {
    await axios.get(`${server}/saleuser/logout`, { withCredentials: true });
    dispatch({ type: "SalesLogoutSuccess" });
  } catch (error) {
    dispatch({
      type: "SalesLogoutFail",
      payload: error.response?.data?.message || "Logout Failed",
    });
  }
};
