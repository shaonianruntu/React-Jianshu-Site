/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:24:19
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 11:44:21
 */
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0px auto;
  overflow: hidden;
  /* background: orange; */
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;

  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0px;
  border-bottom: 1px solid #f0f0f0;
display:block;
  .list-pic {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    object-fit: cover;
  }
`;

export const ListInfo = styled.div`
    width: 450px;
    display:block;
    float: left;
    .title{
        margin-bottom: 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .desc{
        margin-bottom: 8px;
        font-size:13px;
        line-height:24px;
        color: #999;
    }
`;


export const ListAction = styled.div`
    color:#b4b4b4;
    font-size: 12px;
    span{
        margin-right: 10px;
        .iconfont{
            font-size: 12px;
            margin-right: 1px;
        }  
        &.star{
            color :#ea6f5a
        }
    }
`

export const RecommendWrapper = styled.div`
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height:50px;
    background: url(${(props)=>props.imgUrl});
    background-size: contain;
    margin-bottom:6px;
`

export const WriterWrapper = styled.div`
margin-top: 30px;
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius:3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`