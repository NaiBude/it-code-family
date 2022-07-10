import { DescribeArticleList } from '@/api/article';

interface StateType {
  article: any;
}

const ArticleInfo = {
  namespace: 'articleInfo',

  state: {
    articleData: [],
  },

  reducers: {
    setArticleData(state, action) {
      return { ...state, articleInfo: action.payload };
    },
  },

  effects: {
    *articleData({ payload }, { call, put }) {
      const result = yield call(DescribeArticleList);
      yield put({
        type: 'setArticleData',
        payload: result.Data,
      });
    },
  },
};

export default ArticleInfo;
