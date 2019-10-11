/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 15:36:59
 */
import { actionTypes } from "./index";
import { fromJS } from "immutable";
import { from } from "rxjs";

const defaultState = fromJS({
  page: 1,
  totalPage: 1,
  totalNum: 0,
  topicList: [],
  articleList: [],
  recommandList: [],
  writerList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        totalPage: fromJS(action.totalPage),
        totalNum: fromJS(action.totalNum),
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommandList: fromJS(action.recommandList),
        writerList: fromJS(action.writerList)
      });
    default:
      return state;
  }
};
