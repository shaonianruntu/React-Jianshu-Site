/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:35:49
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 18:22:21
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
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
