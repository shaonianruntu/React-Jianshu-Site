/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:30:10
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 15:34:39
 */
import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";

export const getInputFocusAction = () => ({
  type: SEARCH_FOCUS
});

export const getInputBlurAction = () => ({
  type: SEARCH_BLUR
});
