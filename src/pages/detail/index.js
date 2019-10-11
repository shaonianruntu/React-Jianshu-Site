/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:17:07
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 19:44:34
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { actionCreators } from "./store";

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
    console.log(this.props);
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

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Detail);
