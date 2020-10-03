import { authActionTypes } from "./auth.types";

export const login = (email, password, device_name) => {
  return async (dispatch) => {
    const response = await fetch("https://airsoft.testno.xyz/api/login/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        device_name: device_name,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "This email exists already!";
      }
      throw new Error(message);
    }
    const resData = await response.json();

    dispatch({
      type: authActionTypes.LOGIN,
      userName: resData.user.name,
      userId: resData.user.id,
      token: resData.token,
    });

    saveDataToStorage(resData.user.name, resData.user.id, resData.token);
  };
};
const saveDataToStorage = (userName, userId, token) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userName: userName,
      userId: userId,
      token: token,
    })
  );
};

export const logout = () => {
  localStorage.removeItem("userData");
  return { type: authActionTypes.LOGOUT };
};

export const authenticate = (userName, userId, token) => {
  return (dispatch) => {
    dispatch({
      type: authActionTypes.AUTHENTICATE,
      userName: userName,
      userId: userId,
      token: token,
    });
  };
};
