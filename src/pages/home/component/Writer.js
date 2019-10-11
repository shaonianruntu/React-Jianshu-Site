/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:36:18
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 11:42:44
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import { WriterWrapper } from "../style";

class Writer extends Component {
  render() {
    return <WriterWrapper>Writer~</WriterWrapper>;
  }
}

export default connect(
  null,
  null
)(Writer);
