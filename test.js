import findIndexById from "./findIndexById.js";
import index2Meta from "./index2Meta";
import meta2index from "./meta2index";

export const hex2rgb = (hex, n = 0.2) => {
  var rgb = [];
  hex = hex.substr(1); //去除前缀 # 号
  if (hex.length === 3) {
    // 处理 "#abc" 成 "#aabbcc"
    hex = hex.replace(/(.)/g, "$1$1");
  }
  hex.replace(/../g, function (color) {
    rgb.push(parseInt(color, 0x10)); //按16进制将字符串转换为数字
  });
  return `rgba(${rgb.join(",")},${n})`;
};

export { findIndexById, index2Meta, meta2index };
