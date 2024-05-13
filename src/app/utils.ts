export function objectToString(obj, indent = '  ', currentIndent = '') {
  let output = '';
  if (Array.isArray(obj)) {
    output += '[\n';
    for (let i = 0; i < obj.length; i++) {
      output += currentIndent + indent + objectToString(obj[i], indent, currentIndent + indent);
      if (i < obj.length - 1) {
        output += ',';
      }
      output += '\n';
    }
    output += currentIndent + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    output += '{\n';
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = obj[key];
      output += currentIndent + indent + key + ': ';
      if (typeof value === 'function') {
        output += value.toString();
      } else if (typeof value === 'object') {
        output += objectToString(value, indent, currentIndent + indent);
      } else {
        output += JSON.stringify(value);
      }
      if (i < keys.length - 1) {
        output += ',';
      }
      output += '\n';
    }
    output += currentIndent + '}';
  } else {
    output += JSON.stringify(obj);
  }

  return replaceRxjsFunction(output);
}

export function replaceRxjsFunction(str) {
  const regex = /\(0,rxjs(?:_operators)?__WEBPACK_IMPORTED_MODULE_\d+__\.(.*?)\)/g;

  const output = str.replace(regex, '$1');

  return output;
}