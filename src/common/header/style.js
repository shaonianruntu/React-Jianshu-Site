/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 11:11:24
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 14:23:53
 */
import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
position:relative;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: "/"
})`
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
    padding-right: 70px;
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
.iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    /* background: orange; */
    border-radius:50%;
    text-align: center;
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
padding: 0 20px;
box-sizing: border-box; /* 不让 padding 来扩充 width */
&::placeholder{
    color: #999;
}
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