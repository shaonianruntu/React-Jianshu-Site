/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 09:24:19
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 13:55:10
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

export const ListWrapper = styled.div`
    .readMore{
        cursor: pointer;
        display:block;
        width:100%;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: #a5a5a5;
    
        margin: 30px auto 60px;
        padding: 12px 15px;
        text-align: center;
        font-size: 15px;
        color: #fff;
    }
`

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

export const DownloadWrapper = styled.div`
    margin-bottom:30px;
    padding: 7px 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    height: 66px;
    .download-pic{
        display:block;
     float: left;
        width: 50px;
        height: 50px;
        opacity: 0.85;
    }
`

export const DownloadInfo = styled.div`

    margin-left: 8px;
    display: inline-block;
    align-items: center;
            margin-top: 10px;
        color: #333;
            font-size: 14px;
            .desc{
                font-size:12px;
                    color: #999;
                margin-top: 4px;
            }
`

export const WriterWrapper = styled.div`
    margin-top: 30px;
    width: 280px;
    border-radius:3px;
    line-height: 300px;
    .writer_watchMore{
        cursor: pointer;
        display:block;
        padding: 7px 7px 7px 12px;
        width: 100%;
        font-size: 13px;
        line-height:20px;
        text-align:center;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
    } 
`


export const WriterTitle = styled.div`
    font-size:14px;
    line-height: 1.5;
    margin-bottom: 15px;
    color: #969696;
`

export const WriteSwitch = styled.div`
    float:right;
    cursor: pointer;
    .spin{
        display: block;
        float:left;
        font-size :14px;
        margin-right:2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const WriterInfoList = styled.div`
    overflow: hidden;
   margin-bottom: 10px;
`

export const WriterInfoItem = styled.div`
    .writer-pic{
        display: block;
        float: left;
        width:48px;
        height:48px;
        border-radius: 50%;
        border: 1px solid #ddd
    }
`

export const WriterInfoUser = styled.div`
    width: 220px;
    display:block;
    float: right;
    padding-top: 5px;
    font-size: 14px;
    line-height: 20px;
    color:#333;

    .desc{
        margin-top: 2px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #969696;
    }
`

export const WriterInfoUserTitle = styled.div`
    .title{
        width: 160px;
        float: left;
        display: block;
    }
    .follow{
        width: 50px;
        text-align: right;
        font-size: 13px;
        display: block;
        float: right;
        color: #42c02e;
    }
`