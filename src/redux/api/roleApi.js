import CustomAxios from "../../utils/configAxios";
import { toast } from "react-toastify";
import {
  getAllRoleAction,
  createRoleAction,
  deleteRoleAction,
} from "../actions/actionsRole&Category";
export const roleApi = async (dispatch, data) => {
  await CustomAxios.post("/role/", data)
    .then((res) => {
      toast.success("create role success");
      dispatch(createRoleAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
export const getRoleApi = async (dispatch) => {
  await CustomAxios.get("/role/")
    .then((res) => {
      dispatch(getAllRoleAction(res.data));
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
export const deleteRoleApi = async (dispatch, id) => {
  await CustomAxios.delete(`/role/${id}`)
    .then((res) => {
      toast.success("delete role success");
      dispatch(deleteRoleAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
