const assert = require('assert');
const Paint = require('../paint.js');

describe("Paint", function(){

  let paint;

  beforeEach( function () {
    paint = new Paint(200);
  });

  it("should be able to check amount of paint", function(){
    const actual = paint.isEmpty();
    assert.strictEqual(actual, false)
  });

  it("should empty itself of paint", function(){
    paint.emptyPaint();
    const actual = paint.litres;
    assert.strictEqual(actual, 0)
  });

});
