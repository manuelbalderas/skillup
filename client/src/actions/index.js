import { SET_USER, GET_PUBLICATIONS, SET_DETAIL } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setDetail = (payload) => ({
  type: SET_DETAIL,
  detail: payload,
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
      dispatch(setDetail(payload.detail));
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
      dispatch(setDetail(payload.detail));
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
      dispatch(setDetail(payload.detail));
      // handle error, poner un texto que diga el error
    } else {
      localStorage.setItem("user", JSON.stringify(payload.user));
      dispatch(setUser(payload.user));
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
      dispatch(setDetail(payload.detail));
      // handle error
    } else {
      localStorage.setItem("user", JSON.stringify(payload.user));
      dispatch(setUser(payload.user));
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
    const publications = await response.json();
    dispatch(getPublications(publications));
  };
};

export const getJobsAPI = () => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/publications/jobs`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const publications = await response.json();
    dispatch(getPublications(publications));
  };
};

export const getTrainingsAPI = () => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8000/publications/trainings`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const publications = await response.json();
    dispatch(getPublications(publications));
  };
};

export const getAuthorPublicationsAPI = (author) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8000/publications/${author}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const publications = await response.json();
    dispatch(getPublications(publications));
  };
};

export const getAuthorJobsAPI = (author) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8000/publications/jobs/${author}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const publications = await response.json();
    dispatch(getPublications(publications));
  };
};

export const getAuthorTrainingsAPI = (author) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:8000/publications/trainings/${author}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const publications = await response.json();
    dispatch(getPublications(publications));
  };
};

export const getPublicationID = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/publication/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data.id;
  };
};

export const getPublicationAPI = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/publication/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    dispatch(getPublications(data));
  };
};

export const postPublicationAPI = (data) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();

    if (payload.detail) {
      dispatch(setDetail(payload.detail));
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
