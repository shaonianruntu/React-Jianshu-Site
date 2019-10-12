/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-12 17:57:38
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 17:59:38
 */
/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 19:47:47
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 17:56:22
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// 关于 styled component 的 API 更新：https://www.jianshu.com/p/42f85418514f
// 不在需要使用 innerRef， 可以直接使用 ref
class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;

    if (!loginStatus) {
      return <div>写文章页面</div>;
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

export default connect(
  mapState,
  null
)(Write);
