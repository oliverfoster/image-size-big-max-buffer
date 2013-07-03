var expect = require('expect.js');

var imageSize = require('../lib');

['png', 'gif', 'bmp', 'psd'].forEach(function (type) {

  describe(type.toUpperCase(), function() {

    var dimensions;

    beforeEach(function () {
      dimensions = imageSize('specs/images/sample.' + type);
    });

    it('should return correct size for ' + type, function() {
      expect(dimensions.width).to.be(123);
      expect(dimensions.height).to.be(456);
    });
  });
});
