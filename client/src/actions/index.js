import { SET_USER, LOG_OUT } from "./actionType";

export const setUser = (user) => ({
  type: SET_USER,
  user: user,
});

export const studentLogInAPI = (data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/student/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();

    if (!payload.detail) {
      dispatch(setUser(payload.user));
      localStorage.setItem("user", JSON.stringify(payload.user));
    } else {
      // handle error
    }
  };
};

export const studentSignUpAPI = (data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/student/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();

    if (payload.detail) {
      // handle error, poner un texto que diga el error
    }
  };
};

export const signOutAPI = () => {
  return async (dispatch) => {
    dispatch(setUser(null));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    }
  };
};

// export const setUser = (payload) => ({
// type: SET_USER,
// user: payload,
// });

// export const setAuthToken = (authToken) => ({
// type: SET_TOKEN,
// token: authToken,
// });
