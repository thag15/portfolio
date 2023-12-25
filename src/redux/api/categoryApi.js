import CustomAxios from "../../utils/configAxios";
import { toast } from "react-toastify";
import {
  createCategoryAction,
  getAllCategoryAction,
  deleteCategoryAction,
} from "../actions/actionsRole&Category";
export const createCategoryApi = async (dispatch, data) => {
  await CustomAxios.post("/category/", data)
    .then((res) => {
      toast.success("create category success");
      dispatch(createCategoryAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
export const getCategoryApi = async (dispatch) => {
  await CustomAxios.get("/category/")
    .then((res) => {
      dispatch(getAllCategoryAction(res.data));
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
export const deleteCategoryApi = async (dispatch, id) => {
  await CustomAxios.delete(`/category/${id}`)
    .then((res) => {
      toast.success("deleteCategory success");
      dispatch(deleteCategoryAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
