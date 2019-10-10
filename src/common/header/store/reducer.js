/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 20:26:24
 */
import { actionTypes, actionCreators } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  // 用来控制“换一批”的页数
  page: 1,
  totalPage: 1,
  totalNum: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable 对象的 set 方法，会结合之前的 immutable 对象的值和设置的值，返回一个全新的对象
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      // merge 等价于连写 set
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
        totalNum: action.totalNum
      });
    // return state
    //   .set("list", action.data)
    //   .set("totalPage", action.totalPage)
    //   .set("totalNum", action.totalNum);
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
