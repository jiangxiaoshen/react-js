import { COUNT_ADD, COUNT_REDUCE } from '../constants/counter';
// 如果要改变 countReducer的 state 值,必须dispatch 派发一个 action
// action 需要两个参数
//   type  通过 type区分是对 state 做什么操作
//   payload  载荷,即传递的数据
export const countAddAction = {
  type: COUNT_ADD,
  payload: {},
};
export const countReduceAction = {
  type: COUNT_REDUCE,
  payload: {},
};
