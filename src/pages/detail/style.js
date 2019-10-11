/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 18:28:34
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 18:54:42
 */
import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 960px;
  margin: 0px auto;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DetailLeft = styled.div`
  float: left;
  width: 730px;
  padding-top: 30px;
  padding: 24px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
`;

export const DetailRight = styled.div`
  float: right;
  width: 260px;
  padding-top: 30px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  line-height: 42px;
  font-size: 30px;
  color: #404040;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.div`
  font-size: 13px;
  color: #969696;
  margin-bottom: 32px;
  .star {
    color: #ec7259;
    .iconfont {
      font-size: 13px;
      margin-right: 5px;
    }
  }
  span {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  color: #404040;
  img {
    width: 100%;
    padding-bottom: 25px;
  }
  p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
`;
