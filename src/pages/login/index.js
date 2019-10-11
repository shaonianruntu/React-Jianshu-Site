/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 19:47:47
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 20:18:47
 */
import React, { PureComponent } from "react";

import { LoginWrapper, LoginBox, LoginToggle, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <LoginToggle>
            <span>登录</span>·<span>注册</span>
          </LoginToggle>
          <Input className="LoginAccount" placeholder="账号"></Input>
          <Input className="LoginPassword" placeholder="密码"></Input>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

export default Login;
