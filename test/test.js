var expect = require('expect.js');

var service = require('../services/service.js');

describe('#test', function() {
  it('add test', function(done) {
    service.add(2, 3, function(result) {
      expect(result).to.be(5);
      done();
    });
  }); 
}); 