/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 15:21:03
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 15:22:40
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
