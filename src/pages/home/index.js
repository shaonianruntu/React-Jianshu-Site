/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:16:25
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 15:44:59
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import Topic from "./component/Topic";
import List from "./component/List";
import Recommand from "./component/Recommend";
import Download from "./component/Download";
import Writter from "./component/Writer";

import axios from "axios";

import { HomeWrapper, HomeLeft, HomeRight } from "./style";

import { actionCreators } from "./store";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4741/240c3b01ebd63e7a7129976df20c5e10bd43d799.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          ></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommand></Recommand>
          <Download></Download>
          <Writter></Writter>
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    const { changeHomeData } = this.props;
    changeHomeData();
  }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    // 这个 dispatch 在 react-thunk 表示直接执行
    dispatch(actionCreators.getHomeInfo());
  }
});

export default connect(
  null,
  mapDispatch
)(Home);
