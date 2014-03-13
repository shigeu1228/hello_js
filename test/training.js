var expect = require('expect.js');

var service = require('../services/service.js');

/**
 * テストコードを記述していきます
 */
describe('#training', function() {


  describe('Fizz Buzz', function() {

    /**
     * fizzBuzz関数のテストをします。
     * 引数を渡し、3で割り切れれば'fizz'、5で割り切れれば'buzz'、3でも5でも割り切れれば'fizz buzz'が返ります。
     * 上記のいずれかでも無ければnullを返します。
     */
    it ('fizz', function(done) {
      var result = service.fizzBuzz(3);
      expect(result).to.be('fizz');
      done();
    });

    it ('buzz', function(done) {
      var result = service.fizzBuzz(5);
      expect(result).to.be('buzz');
      done();
    });

    it ('fizz buzz', function(done) {
      var result = service.fizzBuzz(15);
      expect(result).to.be('fizz buzz');
      done();
    });

    it ('null', function(done) {
      var result = service.fizzBuzz(2);
      expect(result).to.be(null);
      done();
    });

  });

  describe('Sum', function() {

    /**
     * sum関数のテストをします。
     * 引数で渡した配列の要素をすべて足してコールバックに渡します。
     * ヒント: lodashのeach関数を利用すると簡単です。
     */
    it ('sum test1', function(done) {
      // 元データ
      var data = [1, 2, 3];

      service.sum(data, function(result) {
        expect(result).to.be(6);
        done();
      });
    });

    it ('sum test2', function(done) {
      // 元データ
      var data = [1];

      service.sum(data, function(result) {
        expect(result).to.be(1);
        done();
      });
    });

    it ('sum test3', function(done) {
      // 元データ
      var data = [];

      service.sum(data, function(result) {
        expect(result).to.be(0);
        done();
      });
    });

  });


  describe('Filter', function() {

    /**
     * filter関数のテストをします。
     * valueが10以上（>=10）のもののみ抽出します。
     * ヒント: lodashのfilter関数を利用すると簡単です。
     */
    it('filter test', function(done) {
      // 元データ
      var data = [
        {id: 'a10000', value: 5},
        {id: 'a10001', value: 10},
        {id: 'a10002', value: 17},
        {id: 'a10003', value: 20},
        {id: 'a10004', value: 9},
        {id: 'a10005', value: 17}
      ];
      service.filter(data, function(result) {
        // 結果
        expect(result).to.be.eql(
          [
            {id: 'a10001', value: 10},
            {id: 'a10002', value: 17},
            {id: 'a10003', value: 20},
            {id: 'a10005', value: 17}
          ]
        );
        done();
      });
    });

  });
});
