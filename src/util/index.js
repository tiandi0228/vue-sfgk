export default {
  removeHTMLTag(str) {
    str = str.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/ig, ''); //去除style
    str = str.replace(/&nbsp;|\s/g, ' '); //去掉&nbsp;
    return str;
  }
}
