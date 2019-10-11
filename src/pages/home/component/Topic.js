/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:35:49
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 10:09:50
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {topicList.map(item => (
          <TopicItem>
            <img className="topic-pic" src={item.get("imgUrl")}></img>
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

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
