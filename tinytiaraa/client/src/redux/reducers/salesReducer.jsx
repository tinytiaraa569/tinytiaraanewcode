const initialState = {
    salesUser: localStorage.getItem("salesUser")
    ? JSON.parse(localStorage.getItem("salesUser"))
    : null,
    loading: false,
    error: null,
  };
  
  export const salesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SalesSignupRequest":
      case "SalesLoginRequest":
      case "LoadSalesUserRequest":
        return { ...state, loading: true };
  
      case "SalesSignupSuccess":
      case "SalesLoginSuccess":
      case "LoadSalesUserSuccess":
        return { ...state, loading: false, salesUser: action.payload, error: null };
  
      case "SalesSignupFail":
      case "SalesLoginFail":
      case "LoadSalesUserFail":
        return { ...state, loading: false, error: action.payload };
  
      case "SalesLogoutSuccess":
        return { ...state, salesUser: null };
  
      default:
        return state;
    }
  };
  