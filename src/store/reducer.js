/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 09:59:22
 */
import { combineReducers } from "redux-immutable";

import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
});

export default reducer;
