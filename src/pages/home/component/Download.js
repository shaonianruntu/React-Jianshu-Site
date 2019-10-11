/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 13:41:30
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 13:46:36
 */
import React, { Component } from "react";

import { DownloadWrapper, DownloadInfo } from "../style";

class Download extends Component {
  render() {
    return (
      <DownloadWrapper>
        <img
          className="download-pic"
          alt=""
          src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
        ></img>
        <DownloadInfo>
          <h3 className="title">方楠专享版简书 ></h3>
          <p className="desc">随时随地发现和创作内容</p>
        </DownloadInfo>
      </DownloadWrapper>
    );
  }
}

export default Download;
