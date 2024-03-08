import axios from "axios";
import axiosInstance from "../helpers/axios";
import { authConstant } from "./constants";
import Swal from "sweetalert2";

export const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      const res = await axiosInstance.post(`/auth/user/login`, {
        ...user,
      });

      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
          iconColor: "#000",
        }).then(() => {
          window.location.replace("/");
        });
      }
    } catch (error) {
      const { data } = error?.response;
      dispatch({
        type: authConstant.LOGIN_FAILURE,

        payload: { msg: data.msg, status: error.response.status },
      });
      Swal.fire({
        icon: "error",
        title: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

export const register = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.SIGNUP_REQUEST });
      const res = await axiosInstance.post(`/auth/user/registration`, user);
      if (res.status === 201) {
        dispatch({
          type: authConstant.SIGNUP_SUCCESS,
          payload: res.data.user,
        });
        Swal.fire({
          icon: "success",
          title: "Registration Success",
          text: `${res.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
          iconColor: "#000",
        }).then(() => {
          window.location.replace(
            `/login/verify-email?email=${res.data.user.email}`
          );
        });
      } else {
        dispatch({
          type: authConstant.SIGNUP_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      const { data } = error?.response;
      dispatch({
        type: authConstant.SIGNUP_FAILURE,
        payload: { error: data.error },
      });
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    // const token =  localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstant.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: { error: "Failed to login!" },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstant.LOGOUT_REQUEST });
    const res = await axiosInstance.get(`/auth/user/logout`);

    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: authConstant.LOGOUT_SUCCESS });
      Swal.fire({
        icon: "info",
        title: "Logout Success",
        showConfirmButton: false,
        timer: 1000,
        iconColor: "#000",
      }).then(() => {
        window.location.replace("/login");
      });
    } else {
      dispatch({
        type: authConstant.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const sendVerificationCodeByEmail = (data) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.CODE_REQUEST });
    try {
      const res = await axiosInstance.get(
        `/auth/user/email/send-verification-code?email=${data.email}`
      );
      if (res.status === 202) {
        dispatch({
          type: authConstant.CODE_SUCCESS,
          payload: { msg: res.data.msg, status: res.status },
        });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: authConstant.CODE_FAILURE,
        payload: { msg: data.msg, status: error.response.status },
      });
      Swal.fire({
        icon: "info",
        title: "Something went wrong. Please click Resend button.",
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

export const verifyCode = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.VERIFY_REQUEST });
      const res = await axiosInstance.post(`/user/auth/email/verify`, data);
      if (res.status === 202) {
        dispatch({
          type: authConstant.VERIFY_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: `${res.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
          iconColor: "#000",
        }).then(() => {
          window.location.replace("/login");
        });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: authConstant.VERIFY_FAILURE,
        payload: { msg: data.msg, status: error.response.status },
      });
      Swal.fire({
        icon: "error",
        title: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

export const verifyCodeForPassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.VERIFY_REQUEST });
      const res = await axiosInstance.post(
        `/user/auth/password/email/verify`,
        data
      );
      if (res.status === 202) {
        dispatch({
          type: authConstant.VERIFY_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: `${res.data.msg}`,
          showConfirmButton: false,
          timer: 1000,
          iconColor: "#000",
        });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: authConstant.VERIFY_FAILURE,
        payload: { msg: data.msg, status: error.response.status },
      });
      Swal.fire({
        icon: "error",
        title: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

// export const updateImage = (form) => {
//   return async (dispatch) => {
//     const API = "b2b471ada4942812ae96473fbb15fa66";
//     await axios
//       .post(`https://api.imgbb.com/1/upload?key=${API}`, form)
//       .then(async (res) => {
//         const data = {
//           img: {
//             url: res?.data?.data?.display_url,
//           },
//         };
//         try {
//           dispatch({ type: authConstant.PICTURE_REQUEST });
//           const res = await axiosInstance.post(`/user/auth/update/img`, data);

//           if (res.status === 200) {
//             const { user, msg } = res.data;
//             window.localStorage.setItem("user", JSON.stringify(user));
//             dispatch({
//               type: authConstant.PICTURE_SUCCESS,
//               payload: user,
//             });
//             Swal.fire({
//               icon: "success",
//               title: `${msg}`,
//               showConfirmButton: false,
//               timer: 1000,
//               iconColor: "#000",
//             }).then(() => {
//               window.location.reload();
//             });
//           }
//         } catch (err) {
//           const { data } = err.response;
//           dispatch({
//             type: authConstant.PICTURE_FAILURE,
//             payload: { msg: data.msg, status: err.response.status },
//           });
//           Swal.fire({
//             icon: "error",
//             title: `${data.msg}`,
//             showConfirmButton: false,
//             timer: 1500,
//             iconColor: "#000",
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: authConstant.PICTURE_FAILURE,
//           payload: error,
//         });
//       });
//   };
// };

export const updateProfile = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.PROFILE_UPDATE_REQUEST });
      const res = await axiosInstance.post(`/user/auth/update/profile`, data);

      if (res.status === 200) {
        const { user, msg } = res.data;
        window.localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstant.PROFILE_UPDATE_SUCCESS,
          payload: user,
        });
        Swal.fire({
          icon: "success",
          title: `${msg}`,
          showConfirmButton: false,
          timer: 1000,
          iconColor: "#000",
        });
      }
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: authConstant.PROFILE_UPDATE_FAILURE,
        payload: { msg: data.msg, status: err.response.status },
      });
      Swal.fire({
        icon: "error",
        title: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

export const updatePassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.PASS_UPDATE_REQUEST });
      const res = await axiosInstance.post(`/user/auth/password/update`, data);

      if (res.status === 200) {
        dispatch({
          type: authConstant.PASS_UPDATE_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: "success",
          title: `${res.data.msg}`,
          showConfirmButton: false,
          timer: 1000,
          iconColor: "#000",
        });
      }
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: authConstant.PICTURE_FAILURE,
        payload: { msg: data.msg, status: err.response.status },
      });
      Swal.fire({
        icon: "error",
        title: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};

export const resetPassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.PASS_UPDATE_REQUEST });
      const res = await axiosInstance.post(`/user/auth/password/reset`, data);

      if (res.status === 200) {
        dispatch({
          type: authConstant.PASS_UPDATE_SUCCESS,
          payload: res.data,
        });
        Swal.fire({
          icon: "success",
          title: `${res.data.msg}`,
          showConfirmButton: false,
          timer: 1000,
          iconColor: "#000",
        }).then(() => {
          window.location.replace("/login");
        });
      }
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: authConstant.PICTURE_FAILURE,
        payload: { msg: data.msg, status: err.response.status },
      });
      Swal.fire({
        icon: "error",
        title: `${data.msg}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };
};
