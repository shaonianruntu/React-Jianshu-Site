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
import { LoginWrapper, LoginBox, LoginToggle, Input, Button } from "./style";
import { actionCreators } from "./store";

// 关于 styled component 的 API 更新：https://www.jianshu.com/p/42f85418514f
// 不在需要使用 innerRef， 可以直接使用 ref
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.userLogin = this.userLogin.bind(this);
  }

  render() {
    const { loginStatus } = this.props;

    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginToggle>
              <span>登录</span>·<span>注册</span>
            </LoginToggle>
            <Input
              className="LoginAccount"
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            ></Input>
            <Input
              className="LoginPassword"
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input;
              }}
            ></Input>
            <Button onClick={this.userLogin}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      console.log(21);

      return <Redirect to="/"></Redirect>;
    }
  }

  // 神奇的 ref 事件绑定的 bug，如果不使用一个中间组件，再向 props 函数传值，会导致值为 undefined
  userLogin() {
    this.props.login(this.account.value, this.password.value);
  }
}

const mapState = state => ({
  // mapState 变量名不能和 mapDispatch 函数名重名
  // login: state.getIn(["login", "login"])
  loginStatus: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem, passwordElem));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Login);
