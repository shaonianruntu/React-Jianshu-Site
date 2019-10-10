/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:30:10
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 16:11:29
 */
import { actionTypes } from "./index";

export const getInputFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const getInputBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
});
