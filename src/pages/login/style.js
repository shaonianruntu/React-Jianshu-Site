/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 19:50:08
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-12 17:02:30
 */
import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 58px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 500px;
  box-sizing: border-box;
  margin: 100px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const LoginToggle = styled.div`
  font-weight: 700;
  color: #969696;
  font-size: 18px;
  margin-bottom: 60px;
  text-align: center;
  span {
    margin: 0px 15px;
    padding: 10px;
    :first-child {
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
  background-color: hsla(0, 0%, 71%, 0.1);
  &.LoginAccount {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  &.LoginPassword {
    border-radius: 0 0 4px 4px;
  }
`;

export const Button = styled.div`
  background: #3194d0;
  width: 100%;
  margin-top: 30px;
  padding: 9px 18px;
  box-sizing: border-box;

  text-align: center;
  font-size: 18px;
  line-height: 30px;
  color: #fff;

  border: none;
  border-radius: 25px;
`;
