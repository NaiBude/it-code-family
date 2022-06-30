import { userInfo } from 'os';
import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';
import { Encryption, Decryption } from '@/utils/encoder';
import DefaultUserInter from '@/models/default/user_info';
import { formatNullConvert } from '@/utils/formatConvert';

export = async function (ctx: ctxInter, next: nextInter) {
  const data = ctx.request.body;
  const dataModel: DefaultUserInter = getGlobalModel('default', 'user_info');
  const message: MessageInter<any> = {
    Code: 0,
    Data: null,
    Message: '登陆成功',
  };
  if (data.username && data.password) {
    const result = await dataModel.selectData();
    if (result.data) {
      const userInfo = result.data.find(
        item => item.username === data.username && item.password === data.password,
      );
      if (userInfo) {
        console.log('登陆成功');
        const timer = Number(new Date());
        const ACCESSTOKEN = Encryption(`${timer}/${3600 * 1000 * 24 * 7}/${data.username}`);
        const REFRESHTOKEN = Encryption(`${data.username}/3000000/${timer}`);
        ctx.cookies.set('ACCESSTOKEN', ACCESSTOKEN, {
          maxAge: 60 * 60 * 1000 * 24 * 7,
          httpOnly: false,
        });
        ctx.cookies.set('REFRESHTOKEN', REFRESHTOKEN, {
          maxAge: 60 * 1000 * 5,
          httpOnly: false,
        });
        // delete userInfo.password;
        message.Data = formatNullConvert(userInfo);
      } else {
        message.Code = -1;
        message.Message = '登陆失败,账号密码错误!';
      }
    } else {
      message.Code = -1;
      message.Message = '服务器出错!';
    }
  } else if (data.username || data.password) {
    message.Code = -2;
    message.Message = '参数错误！';
  } else if (ctx.header.cookie && ctx.header.cookie.length) {
    const tokenList = ctx.header.cookie
      ?.split(' ')
      .join('')
      .split(';')
      .map(item => {
        const cookies = item.replace('=', ':').split(':');
        return [...cookies];
      });
    console.log('tokenList', tokenList);
    let accessToken = '';
    const tokenCurrent = tokenList.find(item => item[0] === 'ACCESSTOKEN');
    if (tokenCurrent?.length) {
      accessToken = tokenCurrent[1];
    }
    const tokenInfoList = Decryption(accessToken).split('/');
    const endTimeStamp = Number(tokenInfoList[0]) + Number(tokenInfoList[1]);
    const nowTimeStamp = Number(new Date());
    console.log(tokenInfoList);

    console.log(endTimeStamp, nowTimeStamp);

    if (nowTimeStamp < endTimeStamp) {
      if (tokenInfoList[2]) {
        const result = await dataModel.findUserData({ username: tokenInfoList[2] });
        if (result.data && Array.isArray(result.data)) {
          message.Message = 'token验证成功';
          const userInfo = result.data[0];
          // delete userInfo.password;
          message.Data = formatNullConvert(userInfo);
          message.Code = 0;
        } else {
          message.Message = 'token验证异常';
          message.Data = result.data;
          message.Code = -1;
        }
      } else {
        message.Code = -1;
        message.Message = 'token异常';
      }
    } else {
      message.Code = -1;
      message.Message = 'token已过期';
    }
  } else {
    message.Code = 1;
    message.Message = '无登陆状态';
  }
  return {
    ...message,
  };
};
