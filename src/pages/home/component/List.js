/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:36:01
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 13:31:34
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import { ListWrapper, ListItem, ListInfo, ListAction } from "../style";

class List extends Component {
  render() {
    const { articleList } = this.props;
    return (
      <ListWrapper>
        {articleList.map(item => (
          <ListItem key={item.get("id")}>
            <img alt="" className="list-pic" src={item.get("imgUrl")}></img>
            <ListInfo>
              <h3 className="title">{item.get("title")}</h3>
              <p className="desc">{item.get("desc")}</p>
              <ListAction>
                <span className="star">
                  <i className="iconfont">&#xeb9e;</i>
                  {item.get("star_num").toFixed(1)}
                </span>
                <span className="name">{item.get("name")}</span>
                <span className="comment">
                  <i className="iconfont">&#xeb93;</i>
                  {item.get("comment_num")}
                </span>
                <span className="like">
                  <i className="iconfont">&#xeb9f;</i>
                  {item.get("like_num")}
                </span>
              </ListAction>
            </ListInfo>
          </ListItem>
        ))}
        <a className="readMore">阅读更多</a>
      </ListWrapper>
    );
  }
}

const mapState = state => ({
  articleList: state.getIn(["home", "articleList"])
});

export default connect(
  mapState,
  null
)(List);
