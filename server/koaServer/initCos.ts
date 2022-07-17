import COS = require('cos-nodejs-sdk-v5');
import { cos as cosConfig } from '@/config/config';

export const cos = new COS({
  SecretId: cosConfig.SecretId,
  SecretKey: cosConfig.SecretKey,
});
