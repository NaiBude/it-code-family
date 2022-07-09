import Exception = require('./exception');

/**
 * 统一的错误类型
 */
const ErrMassage = {
  /**
   * 兼容所有错误类型，所有错误类型皆可以使用
   */
  Compatibility: (msg = '') => new Exception(msg || '服务端未知异常', 10000),
  /**
   * 请求参数非法
   */
  badRequestParams: (msg = '') => new Exception(msg || '请求参数非法', 10001),
  /**
   * 获取图片资源出错
   */
  NotPhotoResourse: (msg = '') => new Exception(msg || '图片资源获取失败', 10002),
};

export default ErrMassage;
