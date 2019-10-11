/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-11 13:17:36
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 13:19:32
 */
import { actionTypes } from "./index";

export const getChangePageAction = page => ({
  type: actionTypes.CHANGE_PAGE,
  page: page
});
