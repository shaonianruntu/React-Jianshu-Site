/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 11:09:19
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 15:56:08
 */
import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";

import {
  getInputFocusAction,
  getInputBlurAction
} from "../../store/actionCreators";

import { GlobalStyle } from "../../statics/iconfont/iconfont";

// 无状态组件
const Header = props => {
  const { focused, handleInputFocus, handleInputBlur } = props;

  return (
    <HeaderWrapper>
      <GlobalStyle />
      <Logo></Logo>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? "focused iconfont" : "iconfont"}>&#xe637;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe615;</i>写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.header.focused
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      const action = getInputFocusAction();
      dispatch(action);
    },

    handleInputBlur() {
      const action = getInputBlurAction();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
