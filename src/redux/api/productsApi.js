import CustomAxios from "../../utils/configAxios";
import { toast } from "react-toastify";
import {
  createProductAction,
  getProductActions,
} from "../actions/actionProduct";
export const createProductApi = async (dispatch, data) => {
  await CustomAxios.post("/products", data)
    .then((res) => {
      toast.success("Create product success");
      dispatch(createProductAction(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data);
    });
};
export const getAllProductsApi = async (dispatch) => {
  await CustomAxios.get("/products")
    .then((res) => {
      dispatch(getProductActions(res.data));
      // console.log("getAllProductsApi:", res);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
export const getProductApi = async (id) => {
  try {
    const res = await CustomAxios.get(`/products/${id}`);
    if (!res) {
      console.log("does not res");
    } else {
      console.log(res);
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
