var expect = require('expect.js');

var service = require('../services/service.js');

/**
 * テストコードを記述していきます
 */
describe('#test', function() {

  /**
   * add関数のテストをします。　
   * 2つの引数を渡し、コールバックで足した値を受け取れるかのテストです。
   */
  it('add test', function(done) {
    service.add(2, 3, function(result) {
      expect(result).to.be(5);
      done();
    });
  });

}); 