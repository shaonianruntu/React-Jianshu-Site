/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:36:18
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 16:17:05
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  WriterWrapper,
  WriterTitle,
  WriteSwitch,
  WriterInfoList,
  WriterInfoItem,
  WriterInfoUser,
  WriterInfoUserTitle
} from "../style";

import { actionCreators } from "../store";

class Writer extends Component {
  render() {
    const {
      writerList,
      page,
      totalPage,
      totalNum,
      handleChangePage
    } = this.props;
    const newList = writerList.toJS();
    const pageList = [];

    for (let i = (page - 1) * 5; i < Math.min(page * 5, totalNum); i++) {
      pageList.push(
        <WriterInfoList key={newList[i].id}>
          <WriterInfoItem>
            <img className="writer-pic" alt="" src={newList[i].imgUrl}></img>
            <WriterInfoUser>
              <WriterInfoUserTitle>
                <h3 className="title">{newList[i].name}</h3>
                <span className="follow">+关注</span>
              </WriterInfoUserTitle>
              <p className="desc">
                写了{newList[i].wordNum}字 · {newList[i].likedNum}喜欢
              </p>
            </WriterInfoUser>
          </WriterInfoItem>
        </WriterInfoList>
      );
    }

    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <WriteSwitch
            onClick={() => {
              handleChangePage(page, totalPage, this.spinIcon);
            }}
          >
            <i
              ref={icon => {
                this.spinIcon = icon;
              }}
              className="iconfont spin"
            >
              &#xe851;
            </i>
            换一批
          </WriteSwitch>
        </WriterTitle>
        {pageList}
        <a className="writer_watchMore">查看更多 ></a>
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  writerList: state.getIn(["home", "writerList"]),
  page: state.getIn(["home", "page"]),
  totalPage: state.getIn(["home", "totalPage"]),
  totalNum: state.getIn(["home", "totalNum"])
});

const mapDispatch = dispatch => {
  return {
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/g, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

      if (page < totalPage) {
        dispatch(actionCreators.getChangePageAction(page + 1));
      } else {
        dispatch(actionCreators.getChangePageAction(1));
      }
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Writer);
