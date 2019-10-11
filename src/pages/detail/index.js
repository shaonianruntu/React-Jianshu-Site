/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:17:07
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 19:14:16
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  DetailWrapper,
  DetailLeft,
  DetailRight,
  Header,
  Description,
  Content
} from "./style";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <DetailLeft>
          <Header>{title}</Header>
          <Description>
            <span className="star">
              <i className="iconfont">&#xeb9e;</i>
              22
            </span>
            <span>2019.03.14 22:38:35</span>
            <span>字数 3515</span>
            <span>阅读 6193</span>
          </Description>
          {/* 对 html 原始标签进行解析 */}
          <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
        </DetailLeft>
        <DetailRight></DetailRight>
      </DetailWrapper>
    );
  }
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

export default connect(
  mapState,
  null
)(Detail);
