import CustomAxios from "../../utils/configAxios";
import {
  createUserAction,
  getAllUserAction,
  deleteUserAction,
  updateUserAction,
} from "../actions/actionsUser";
import { update_profile } from "../actions/actionsAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const getUser = async (dispatch, id) => {
  await CustomAxios.get(`/getUser/${id}`)
    .then((res) => {
      console.log(res);
      // dispatch(getProfile(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllUserApi = async (dispatch) => {
  try {
    CustomAxios.get("/auth/getAllUser")
      .then((res) => {
        dispatch(getAllUserAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileApi = async (dispatch, data) => {
  await CustomAxios.patch(`/updateProfile/${data._id}`, data)
    .then((res) => {
      dispatch(update_profile(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const uploadAvatarApi = async (dispatch, data, id) => {
  await CustomAxios.patch(`/upLoadAvatar/${id}`, data)
    .then((res) => {
      dispatch(update_profile(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const createUserApi = async (dispatch, data) => {
  await CustomAxios.post(`/user`, data)
    .then((res) => {
      toast.success("Tạo thành công");
      dispatch(createUserAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
export const deleteUserApi = async (dispatch, id) => {
  await CustomAxios.delete(`/user/${id}`)
    .then((res) => {
      toast.success(`xóa ${res.data.fullName} thành công`);
      dispatch(deleteUserAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
export const updateUserApi = async (dispatch, data) => {
  await CustomAxios.patch(`/user/${data._id}`, data)
    .then((res) => {
      toast.success(`cập nhật  FullName:${res.data.fullName} thành công`);
      dispatch(updateUserAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
