/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 20:24:23
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 17:55:40
 */
import { fromJS } from "immutable";
import { actionTypes } from "./index";

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set("login", action.value);
    case actionTypes.LOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
