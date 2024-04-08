// 静态资源图片渲染，使用方式：<img :src="importImageUrl(item.img)">,图片最好写绝对路径
export const importImageUrl = (path: string) => new URL(path, import.meta.url).href;

// 数字金额千分位逗号分隔
export function formatNumberWithCommas(number: number): string {
  const numberString: string = number.toString();
  const formattedNumber: string = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedNumber;
}

// 封装一个准确判断数据类型的函数
export const getDataType = (obj: any): string => {
  let type = typeof obj;
  if (type != "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}

// 手机号前端脱敏
export const formatPhoneNumber = (number: string | number) => {
  const phoneNumber = String(number)
  if (phoneNumber.length === 11) {
    let firstDigits = phoneNumber.slice(0, 3);
    let lastDigits = phoneNumber.slice(-4);
    return firstDigits + ' **** ' + lastDigits;
  } else {
    return '1** **** ****'
  }
}