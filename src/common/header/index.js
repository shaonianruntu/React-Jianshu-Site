/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 11:09:19
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 14:16:32
 */
import React, { Component } from "react";
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

import { GlobalStyle } from "../../statics/iconfont/iconfont";

class Header extends Component {
  render() {
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
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe637;</i>
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
  }
}

export default Header;
