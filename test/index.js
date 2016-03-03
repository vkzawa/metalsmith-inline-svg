var assertDir = require('assert-dir-equal')
var inlineSvg = require('..')
var Metalsmith = require('metalsmith')

describe('metalsmith-inline-svg', function () {

  it('should inline the svg', function (done) {
    Metalsmith('test/fixtures/basic')
      .use(inlineSvg())
      .build(function (err) {
        if (err) return done(err);
        assertDir('test/fixtures/basic/expected', 'test/fixtures/basic/build')
        done();
      })
  });
})
