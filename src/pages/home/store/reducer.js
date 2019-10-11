/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 11:41:38
 */
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/11573432-6b4182ff1fabd18d?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/14938882-16cb488d885af709.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/650/format/webp"
    },
    {
      id: 3,
      title: "青春校园",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/16235793-8f6f04b7270bbfc3.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
    },
    {
      id: 4,
      title: "职业发展",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/7531088-41f4b2de3120dd1f.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "现实版苏明玉：19年，花了父母34821.65元钱",
      name: "婉兮",
      star_num: 22.7,
      comment_num: 51,
      like_num: 161,
      desc:
        "文/婉兮 图/网络 1 王小红的身世秘密，是在一个炎炎夏日里揭破的。当时的王小红，刚刚结束小升初的考试，人人都认为她能顺利考进县一中，然后通...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/1812827-bbec31890e6e552d.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/900/format/webp"
    },
    {
      id: 2,
      title: "彩铅大全378｜3位70岁奶奶的画：人生永远没有太晚的开始",
      name: "志公馆精品老年大学",
      star_num: 19.0,
      comment_num: 4,
      like_num: 92,
      desc:
        "精品老年大学 【志公馆】——国内首家退休俱乐部 致力于预防和延缓阿尔茨海默症系列 【乐活课程】油画|彩铅|水彩|国画|书法 前两年，一名叫「塔莎...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/6239357-44ab8e7ffea27fde?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"
    },
    {
      id: 3,
      title: "米粉乐开怀! 小米宣布: 所有小米手机都有18个月的不卡顿系统更新",
      name: "拉丝啊加",
      star_num: 0.3,
      comment_num: 10,
      like_num: 10,
      desc:
        "小米数字系列的旗舰机型小米9已经正式发布，依旧有着超高的性价比，在2999的价位堆料仍旧非常猛：索尼IMX586+骁龙855+128GB存储空间...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/16441400-b67765cc73aea0b6.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
    },
    {
      id: 4,
      title: "无论你的工资多少，都请记住这些！",
      name: "极简研习社",
      star_num: 25.4,
      comment_num: 14,
      like_num: 149,
      desc:
        "第一份：用来做生活费。 第二份：用来交朋友，扩大你的人际圈。 你的电话费可以用掉100元。每个月可以请客两次，每次150元。请谁呢？记住，请比你...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/3614633-2e5a8d0fef279a28.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
  ],
  recommandList: [
    {
      id: 1,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
