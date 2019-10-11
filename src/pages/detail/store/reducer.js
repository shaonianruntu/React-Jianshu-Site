/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 19:02:28
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 19:26:49
 */
import { fromJS } from "immutable";
import { actionTypes } from "./index";

const defaultState = fromJS({
  title: "",
  content: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
};
