/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:36:11
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 11:40:01
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends PureComponent {
  render() {
    const { recommandList } = this.props;
    return (
      <RecommendWrapper>
        {recommandList.map(item => (
          <RecommendItem
            key={item.get("id")}
            imgUrl={item.get("imgUrl")}
          ></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  recommandList: state.getIn(["home", "recommandList"])
});

export default connect(
  mapState,
  null
)(Recommend);
