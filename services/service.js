
/**
 * サンプルの関数です。
 * コールバックを呼び出します。
 */
exports.hello = function(callback) {
  console.log("call 'hello' function");

  callback();
};