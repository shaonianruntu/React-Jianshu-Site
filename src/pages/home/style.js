import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0px auto;
    overflow: hidden;
    /* background: orange; */
`


export const HomeLeft = styled.div`
    float:left;
    width: 625px;
    margin-left: 15px;
    padding-top:30px;

    .banner-img{
        width: 625px;
        height: 270px;
        border-radius: 5px;
    }
`

export const HomeRight = styled.div`
    float: right;
    width: 240px;
    padding-top:30px;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
 
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height:32px;
    font-size: 14px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
    }
`