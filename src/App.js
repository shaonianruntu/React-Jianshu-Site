/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 10:28:22
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 18:00:30
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header";

import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Write from "./pages/write";

import store from "./store";

import { GlobalStyle } from "./style";
import { IconGlobalStyle } from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconGlobalStyle />
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/write" exact component={Write}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
