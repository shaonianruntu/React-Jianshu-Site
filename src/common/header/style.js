/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 11:11:24
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 18:16:53
 */
import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
position:relative;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
position:absolute;
top:0px;
left:0px;
display:block;
width:100px;
     height:58px;
     background: url(${logoPic});
     background-size: contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0px auto;
    /* padding-right: 70px; */
    box-sizing: border-box;
`

export const NavItem = styled.div`

    padding:0 15px;
    font-size: 17px;
        line-height: 58px;
        color: #333333;
    &.left{
        float:left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
position:relative;
float: left;
.zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    /* background: orange; */
    border-radius:50%;
    text-align: center;
    &.focused{
        background: #777;
        color: #fff;
    }
}




` 

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
width: 240px;
height: 38px;
border:none;
outline: none;
border-radius: 19px;
font-size:14px;
background: #eee;
margin-top: 10px;
margin-left: 20px;
padding: 0 30px 0 20px;
box-sizing: border-box; /* 不让 padding 来扩充 width */
color: #777;
&::placeholder{
    color: #999;
}
&.focused{
    width: 300px;

}
&.slide-enter { 
    width: 240px;
  transition: all 0.2s ease-out;
}
&.slide-enter-active {
    width: 300px;
 
}
&.slide-exit {
    width: 300px;
  transition: all 0.2s ease-out;
}
&.slide-exit-active {
    width: 240px;
}
`

export const SearchInfo = styled.div`
    position:absolute;
    right:0px;
    top: 58px;
    left: 20px;
    width:260px;
    padding: 0px 20px;

    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    background:white;

`

export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size: 14px;
color: #969696;
`

export const SearchInfoSwitch = styled.div`
float:right;
font-size: 13px;
cursor: pointer;
.spin{
    display: block;
    float:left;
    font-size :12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-origin: center center;
}
`

export const SearchInfoList = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
    margin-right:-10px;
`

export const SearchInfoItem = styled.a`
display:block;
float: left;
line-height: 20px;
padding: 0px 7px;
margin-right:10px;
margin-bottom:10px;
font-size: 12px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
`


export const Addition = styled.div`
    position:absolute;
    right:0px;
    top:0px;
    height:58px;
    
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top:9px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0px 20px;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`

