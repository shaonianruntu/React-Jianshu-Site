/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 19:02:28
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 19:08:23
 */
import { fromJS } from "immutable";
import { actionTypes } from "./index";

const defaultState = fromJS({
  title: "现实版苏明玉：19年，花了父母34821.65元钱",
  content:
    '<img  alt=""  src="https://upload-images.jianshu.io/upload_images/1812827-bbec31890e6e552d.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/900/format/webp"></img><p>文/婉兮 图/网络</p><p>1</p><p>王小红的身世秘密，是在一个炎炎夏日里揭破的。</p><p>当时的王小红，刚刚结束小升初的考试，人人都认为她能顺利考进县一中，然后通过学习脱胎换骨，一步步活成传说中的人上人。</p><p>可母亲却不打算继续出钱，她已经耐了6年性子等到女儿小学毕业，不可能再为一个丫头片子投入什么资源。</p><p>那个傍晚，她终于把事情摊开来讲：“你好好干，帮着家里攒点钱，以后也好置办嫁妆。”</p><p>“妈，老师说我能考上一中，我以后能挣很多钱，全部都给你好不好？”</p><p>“不好！”小红妈拒绝得干干脆脆，“一个丫头片子读那么多书干嘛，反正是别人家的人。”</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
