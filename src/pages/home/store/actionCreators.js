/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 13:17:36
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 18:03:21
 */
import { actionTypes } from "./index";
import axios from "axios";

const changeHomeData = data => ({
  type: actionTypes.CHANGE_HOME_DATA,
  totalPage: Math.ceil(data.writerList.length / 5),
  totalNum: data.writerList.length,
  topicList: data.topicList,
  articleList: data.articleList,
  recommandList: data.recommandList,
  writerList: data.writerList
});

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: list,
  nextPage: nextPage
});

export const getChangePageAction = page => ({
  type: actionTypes.CHANGE_PAGE,
  page: page
});

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const data = res.data;
        dispatch(changeHomeData(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const getMoreList = articlePage => {
  return dispatch => {
    axios
      .get("/api/homeList.json?page=" + articlePage)
      .then(res => {
        const data = res.data;
        dispatch(addHomeList(data.data, articlePage + 1));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const toggleTopShow = show => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  showScroll: show
});
