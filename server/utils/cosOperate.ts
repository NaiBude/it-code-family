import { cos } from '@/koaServer/initCos';

interface GetAvtarUrlInter {
  (key: string): Promise<{ Url: string }>;
}

export const getAvtarUrl: GetAvtarUrlInter = key => {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl(
      {
        Bucket: 'itfamilycode-1308254816' /* 必须 */,
        Region: 'ap-guangzhou' /* 必须 */,
        Key: key,
        Sign: true,
      },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      },
    );
  })
    .then((data: string) => {
      return data;
    })
    .catch(err => {
      return err;
    });
};
