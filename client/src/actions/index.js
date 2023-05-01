import { SET_USER, SET_TOKEN, AUTH_SUCCESS } from "./actionType";

export const loginSuccess = (user, token) => ({
  type: AUTH_SUCCESS,
  payload: { user, token },
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
      dispatch(loginSuccess(payload.user, payload.token));
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", JSON.stringify(payload.token));
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

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));

  if (user && token) {
    return { "x-access-token": token };
  } else {
    return {};
  }
};

// export const setUser = (payload) => ({
// type: SET_USER,
// user: payload,
// });

// export const setAuthToken = (authToken) => ({
// type: SET_TOKEN,
// token: authToken,
// });