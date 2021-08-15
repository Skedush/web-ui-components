/* eslint-disable no-undef */
/* eslint-disable valid-jsdoc */
/**
 * 判断是否是有效的React元素
 *
 * @param object 任意对象
 */
export function isValidElement(object: any): boolean {
  return (
    typeof object === 'object' && object !== null && object.$$typeof === Symbol.for('react.element')
  );
}

//  base64 转 File
export function base64ToFile(dataurl, filename = 'file') {
  return new Promise<File>((resolve, reject) => {
    try {
      const arr = dataurl.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      resolve(new File([u8arr], filename, { type: mime }));
    } catch (error) {
      reject(error);
    }
  });
}

// 图片转base64
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
