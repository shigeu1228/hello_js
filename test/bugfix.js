var _ = require('lodash');
var expect = require('expect.js');

/**
 * テストコードを記述していきます
 */
describe('#Bug Fix', function() {

  /**
   * 問題のあるテストその1
   */
  it('bugfix1', function(done) {

    /**
     * この関数を呼んだらfalseが返るようにしたい。
     */
    var getFalse = function() {
      return new Boolean(false);
    };

    // テスト実行
    var bool = getFalse();
    expect(bool).to.be(false);
    done();
  });


  /**
   * 問題のあるテストその2
   */
  it('bugfix2', function(done) {

    /**
     *  この関数を呼んだらコールバックに5が返るようにしたい。
     */
    var testFunc = function(callback) {

      var result = add(2, 3);

      // 引数を足して返す
      var add = function(x, y) {
        return x + y;
      };

      return callback(result);
    };

    // テスト実行
    testFunc(function(result) {
      expect(result).to.be(5);
      done();
    });

  });


  /**
   * 問題のあるテストその3
   */
  it('bugfix3', function(done) {

    /**
     *  この関数を呼んだら引数の配列の要素をすべて２倍にして、コールバックに返るようにしたい
     */
    var testFunc = function(array, callback) {

      // それぞれ要素を2倍にする
      _.each(array, function(data) {
        data *= 2;
      });
      return callback(array);

    };

    // テスト実行
    testFunc([1, 2, 3],function(result) {
      expect(result).to.be.eql([2, 4, 6]);
      done();
    });
  });

});
