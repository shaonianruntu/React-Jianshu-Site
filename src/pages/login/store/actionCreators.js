/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 20:23:54
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 18:03:30
 */
import { actionTypes } from "./index";
import axios from "axios";

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
});

export const login = (account, password) => {
  return dispatch => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登录失败");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
});
