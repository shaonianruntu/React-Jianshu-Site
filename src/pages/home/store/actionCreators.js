/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 13:17:36
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 15:35:24
 */
import { actionTypes } from "./index";

export const getChangePageAction = page => ({
  type: actionTypes.CHANGE_PAGE,
  page: page
});

export const getChangeHomeDataAction = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  totalPage: Math.ceil(data.writerList.length / 5),
  totalNum: data.writerList.length,
  topicList: data.topicList,
  articleList: data.articleList,
  recommandList: data.recommandList,
  writerList: data.writerList
});
