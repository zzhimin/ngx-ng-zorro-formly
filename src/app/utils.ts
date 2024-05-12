export function objectFunctionsToString(obj) {
  // 创建一个新对象或数组来存储转换后的结果
  let newObj;

  // 检查 obj 是否是一个数组
  if (Array.isArray(obj)) {
    newObj = [];
  } else {
    newObj = {};
  }

  // 遍历对象或数组的所有元素
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // 如果元素是一个函数，则将其转换为字符串
      if (typeof value === 'function') {
        // 转换函数为字符串并清理空格和换行符
        const funcStr = String(value).replace(/\s{2,}/g, ' ').replace(/^\s+|\s+$/gm, '');
        newObj[key] = funcStr;
      } else if (typeof value === 'object' && value !== null) {
        // 如果元素是一个对象或数组，递归调用函数
        newObj[key] = objectFunctionsToString(value);
      } else {
        // 其他类型的元素保持不变
        newObj[key] = value;
      }
    }
  }

  return newObj;
}