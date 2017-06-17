export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let itemArr = item.subString(1).split('=');
      let key = decodeURIComponent(itemArr[0]);
      let val = decodeURIComponent(itemArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}
