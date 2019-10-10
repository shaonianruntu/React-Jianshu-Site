/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 10:28:22
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 15:23:55
 */
import React, { Component } from "react";
import { Provider } from "react-redux";

import Header from "./common/header/index";
import store from "./store/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
