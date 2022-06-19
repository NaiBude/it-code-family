export const formatNullConvert = (obj: object) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === undefined)) {
      console.log('aaaaa');

      obj[key] = '';
    }
  }
  return { ...obj };
};
