/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 10:11:01
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
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
