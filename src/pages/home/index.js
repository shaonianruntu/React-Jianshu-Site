/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:16:25
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 09:38:47
 */
import React, { Component } from "react";

import Topic from "./component/Topic";
import List from "./component/List";
import Recommand from "./component/Recommend";
import Writter from "./component/Writer";

import { HomeWrapper, HomeLeft, HomeRight } from "./style";

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
          <Writter></Writter>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
