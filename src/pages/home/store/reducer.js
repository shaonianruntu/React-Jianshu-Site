/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 18:08:21
 */
import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  page: 1,
  totalPage: 1,
  totalNum: 0,
  articlePage: 1,
  showScroll: false,
  topicList: [],
  articleList: [],
  recommandList: [],
  writerList: []
});

const changeHomeData = (state, action) => {
  return state.merge({
    totalPage: fromJS(action.totalPage),
    totalNum: fromJS(action.totalNum),
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommandList: fromJS(action.recommandList),
    writerList: fromJS(action.writerList)
  });
};

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(fromJS(action.list)),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state, action);
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set("showScroll", action.showScroll);
    default:
      return state;
  }
};
