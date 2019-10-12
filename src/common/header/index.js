/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 11:09:19
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 18:01:11
 */
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from "./style";

import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";

class Header extends Component {
  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      totalNum,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    for (let i = (page - 1) * 10; i < Math.min(page * 10, totalNum); i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      focused,
      totalNum,
      handleInputFocus,
      handleInputBlur,
      login,
      logout
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(totalNum);
                }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe637;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // immutable getIn 数组等价于连写 get
    focused: state.getIn(["header", "focused"]),
    // focused: state.get("header").get("focused"),
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    totalNum: state.getIn(["header", "totalNum"]),
    login: state.getIn(["login", "login"])
  };
};

const mapDispatchToProps = dispatch => ({
  handleInputFocus(totalNum) {
    console.log(totalNum);
    if (totalNum === 0) {
      dispatch(actionCreators.getList());
    }
    dispatch(actionCreators.getInputFocusAction());
  },
  handleInputBlur() {
    dispatch(actionCreators.getInputBlurAction());
  },
  handleMouseEnter() {
    dispatch(actionCreators.getMouseEnterAction());
  },
  handleMouseLeave() {
    dispatch(actionCreators.getMouseLeaveAction());
  },
  handleChangePage(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/g, "");
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
    if (page < totalPage) {
      dispatch(actionCreators.getChangePageAction(page + 1));
    } else {
      dispatch(actionCreators.getChangePageAction(1));
    }
  },
  logout() {
    dispatch(loginActionCreators.logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
