/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:35:49
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 11:41:10
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import { GlobalStyle } from "../../../style";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        <GlobalStyle />
        {topicList.map(item => (
          <TopicItem key={item.get("id")}>
            <img alt="" className="topic-pic" src={item.get("imgUrl")}></img>
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicList: state.getIn(["home", "topicList"])
  };
};

export default connect(
  mapStateToProps,
  null
)(Topic);
