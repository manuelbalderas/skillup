import { SET_USER, GET_PUBLICATIONS } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const getPublications = (payload) => ({
  type: GET_PUBLICATIONS,
  payload: payload,
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
      localStorage.setItem("user", JSON.stringify(payload.user));
      dispatch(setUser(payload.user));
    } else {
      // handle error
    }
  };
};

export const companyLogInAPI = (data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/company/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();

    if (!payload.detail) {
      localStorage.setItem("user", JSON.stringify(payload.user));
      dispatch(setUser(payload.user));
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

export const companySignUpAPI = (data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/company/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();

    if (payload.detail) {
      // handle error
    }
  };
};

export const signOutAPI = () => {
  return async (dispatch) => {
    dispatch(setUser(null));
    localStorage.removeItem("user");
  };
};

export const getPublicationsAPI = () => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/publications`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let payload;

    const q = await response.json();

    if (Array.isArray(q)) {
      payload = q;
    } else if (typeof q === "object" && q !== null) {
      payload = [q];
    }

    if (q.lenght === 0) {
      // handle error
    } else {
      dispatch(getPublications(payload));
    }
  };
};

export const getMyPublicationsAPI = (author) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/my-publications`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: { author },
    });
    let payload;
    const q = await response.json;
    if (Array.isArray(q)) {
      payload = q;
    } else if (typeof q === "object" && q !== null) {
      payload = [q];
    }

    if (q.lenght === 0) {
      // handle error
    } else {
      dispatch(getPublications(payload));
    }
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
