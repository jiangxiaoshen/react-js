import { LOAD_POST } from '../constants/load';
import { getPost } from '../services/pos_api';

// eslint-disable-next-line import/prefer-default-export
export const loadPost = async (dispatch) => {
  const res = await getPost();
  console.log('api返回的数据', res.data);
  dispatch({
    type: LOAD_POST,
    payload: res.data,
  });
};
