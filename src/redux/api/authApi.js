import CustomAxios from "../../utils/configAxios";

import {
  logout,
  sign_in_err,
  sign_in,
  removeErrApi,
} from "../Actions/actionsAuth";
export const signUpApi = async (user, dispatch, navigate) => {
  try {
    await CustomAxios.post("/register", user)
      .then((res) => {
        if (res.status) {
          dispatch(sign_in(res.data));
          navigate("/");
        }
      })
      .catch((err) => {
        dispatch(sign_in_err(err.response.data));
      });
  } catch (error) {
    dispatch(sign_in_err("Lỗi server"));
  }
};
export const signInApi = async (user, dispatch, navigate) => {
  try {
    await CustomAxios.post("/auth/login", user)
      .then((res) => {
        if (res.status) {
          dispatch(sign_in(res.data));
          navigate("/");
        }
      })
      .catch((err) => {
        dispatch(sign_in_err(err.response.data));
      });
  } catch (error) {
    dispatch(sign_in_err("Lỗi server"));
  }
};
export const logoutApi = async (dispatch, navigate) => {
  await CustomAxios.post("/auth/logout")
    .then((res) => {
      dispatch(logout(res.data));
      navigate("/sign-in");
    })
    .catch((err) => {
      throw new Error(err);
    });
};
export const removeErr = async (dispatch) => {
  dispatch(removeErrApi());
};
