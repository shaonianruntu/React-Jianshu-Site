/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 10:23:05
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 14:12:03
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { GlobalStyle } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <App>
    <GlobalStyle />
  </App>,
  document.getElementById("root")
);
