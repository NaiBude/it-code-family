import { checkInfoType } from '@/consts/utilTypes';

export const checkRegular = (() => {
  const rules = {
    username(str) {
      return /^[a-zA-Z0-9_-]{4,16}$/.test(str);
    },
    password(str) {
      return /^[a-zA-Z0-9_-]{4,16}$/.test(str);
    },
    email(str) {
      return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(str);
    },
    phone(str) {
      return /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(str);
    },
  };
  return {
    check(str: string, type: checkInfoType) {
      return rules[type] ? rules[type](str) : false;
    },
  };
})();
