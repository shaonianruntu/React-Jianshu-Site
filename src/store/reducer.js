/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 15:59:36
 */
import { combineReducers } from "redux";

import { reducer as headerReducer } from "../common/header/store";

const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
