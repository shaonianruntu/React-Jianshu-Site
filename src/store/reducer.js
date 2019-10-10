/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 15:54:19
 */
import { combineReducers } from "redux";

import headerReducer from "../common/header/store/reducer";

export default combineReducers({
  header: headerReducer
});
