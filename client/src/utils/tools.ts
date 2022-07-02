/**
 * 判断子元素是否为父元素的子元素,或者为元素本身
 * @param obj 将要判断的子元素
 * @param parentObj 父元素
 */
export function isParent(obj, parentObj) {
  if (obj !== undefined && obj !== null && obj.tagName.toUpperCase() !== 'BODY') {
    if (obj === parentObj) {
      return true;
    }
    return isParent(obj.parentNode, parentObj);
  }
  return false;
}
