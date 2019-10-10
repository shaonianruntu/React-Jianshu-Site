/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:30:10
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 19:26:46
 */
import { actionTypes } from "./index";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = data => ({
  type: actionTypes.CHANGE_LIST,
  // 需要将 data 覆盖 reducer 里面原来的 list，但是原来的 list 是 immutable 的 list，如果直接使用从 ajax 获取到的普通的 list 来进行覆盖，会让原来的 list 也变成普通的 list，所以，需要使用 immutable 的 list 来覆盖原来的 list，反正 immutable 的特性被破坏。
  data: fromJS(data)
});

export const getInputFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const getInputBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
