/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 19:03:43
 */
import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable 对象的 set 方法，会结合之前的 immutable 对象的值和设置的值，返回一个全新的对象
    return state.set("focused", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set("list", action.data);
  }
  return state;
};
