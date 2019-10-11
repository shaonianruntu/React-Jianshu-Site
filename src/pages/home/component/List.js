/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:36:01
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 19:30:19
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { actionCreators } from "../store";

import {
  ListWrapper,
  ListItem,
  ListInfo,
  ListAction,
  LoadMore
} from "../style";

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <ListWrapper>
        {articleList.map((item, index) => (
          <Link key={index} to={"/detail" + item.get("id")}>
            <ListItem>
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
          </Link>
        ))}
        <LoadMore
          onClick={() => {
            getMoreList(articlePage);
          }}
        >
          阅读更多
        </LoadMore>
      </ListWrapper>
    );
  }
}

const mapState = state => ({
  articleList: state.getIn(["home", "articleList"]),
  articlePage: state.getIn(["home", "articlePage"])
});

const mapDispatch = dispatch => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage));
  }
});

export default connect(
  mapState,
  mapDispatch
)(List);
