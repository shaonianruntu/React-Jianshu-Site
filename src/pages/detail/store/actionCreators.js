/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 19:02:07
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 18:03:14
 */
import axios from "axios";
import { actionTypes } from "./index";

const changeDetail = data => ({
  type: actionTypes.CHANGE_DETAIL,
  title: data.title,
  content: data.content
});

export const getDetail = id => {
  return dispatch => {
    axios
      .get("/api/detail.json?id=" + id)
      .then(res => {
        const data = res.data;
        dispatch(changeDetail(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
