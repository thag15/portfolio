import axios from "axios";

const ConfigAxios = axios.create({
  baseURL: "http://localhost:3000/v1",
  withCredentials: true,
});
// CustomAxios.interceptors.response.use(
//   function (response) {
//     console.log(response);
//     return response.data ? response.data : { statusCode: response.status };
//   },
//   function (error) {
//     let res = {};
//     if (error.response) {
//       res.data = error.response.data;
//       res.status = error.response.status;
//       res.headers = error.response.headers;
//     } else if (error.request) {
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     return res;
//     // return Promise.reject(error);
//   }
// );
ConfigAxios.interceptors.response.use(
  function (response) {
    // Optional: Do something with response data
    return response;
  },
  function (error) {
    // Do whatever you want with the response error here:

    // But, be SURE to return the rejected promise, so the caller still has
    // the option of additional specialized handling at the call-site:
    return Promise.reject(error);
  }
);
export default ConfigAxios;
