/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 10:28:22
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 21:04:21
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header/index";
import store from "./store/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact render={() => <div>home</div>}></Route>
          <Route path="/detail" exact render={() => <div>detail</div>}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
