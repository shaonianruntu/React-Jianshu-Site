/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 16:11:38
 */
import { actionTypes } from "./index";

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }
  return state;
};
