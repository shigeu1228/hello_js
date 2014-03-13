var _ = require("lodash");


/**
 * サンプルの関数です。
 * コールバックを呼び出します。
 */
exports.hello = function(callback) {
  console.log("call 'hello' function");

  callback();
};

/**
 * サンプルの関数です。
 * 整数を２つ受け取り、足した結果をコールバックに渡します。
 */
exports.add = function() {

};
