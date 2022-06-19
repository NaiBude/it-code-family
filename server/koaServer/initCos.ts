import COS = require('cos-nodejs-sdk-v5');
import { cos as cosConfig } from '@/config/config';

export const cos = new COS({
  SecretId: cosConfig.SecretId,
  SecretKey: cosConfig.SecretKey,
});

// export const initCos = function () {
//   console.log('fsafsa');

//   console.log('cos', cos);
//   new Promise((resolve, reject) => {
//     cos.getObjectUrl(
//       {
//         Bucket: 'itfamilycode-1308254816' /* 必须 */,
//         Region: 'ap-guangzhou' /* 必须 */,
//         Key: 'admin123.png',
//         Sign: true,
//       },
//       function (err, data) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       },
//     );
//   }).then(data => {
//     console.log(data);
//   });
// };
