import { Effect } from 'umi';
import { ModelType } from '@/consts/modelType';
import { VerifyUserInfo } from '@/api/UserInfo';

interface StateType {
  userInfo: any;
}

const UserInfo: ModelType<StateType> = {
  namespace: 'userInfo',

  state: {
    userInfo: {},
  },

  reducers: {
    setUserInfo(state, action) {
      return { ...state, userInfo: action.payload };
    },
  },

  effects: {
    *verifyTokenUser({ payload }, { call, put }) {
      const result = yield call(VerifyUserInfo);
      if (result.Code === 0) {
        yield put({
          type: 'setUserInfo',
          payload: result.Data,
        });
        localStorage.setItem('userInfo', JSON.stringify(result.Data));
      }
    },
  },
};
export default UserInfo;
