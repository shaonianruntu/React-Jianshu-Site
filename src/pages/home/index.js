/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:16:25
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 18:13:50
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Topic from "./component/Topic";
import List from "./component/List";
import Recommand from "./component/Recommend";
import Download from "./component/Download";
import Writter from "./component/Writer";

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

import { actionCreators } from "./store";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.handleScrollTop = this.handleScrollTop.bind(this);
  }

  render() {
    const { showScroll } = this.props;

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
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { changeHomeData } = this.props;
    changeHomeData();
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  changeHomeData() {
    // 这个 dispatch 在 react-thunk 表示直接执行
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Home));
