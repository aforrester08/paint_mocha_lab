const assert = require('assert');
const Room = require('../room.js');

describe("Room", function(){

  let room;

  beforeEach( function () {
    room = new Room(200);
  });

  it("should be able to be painted", function(){
    room.paint();
    const actual = room.isPainted;
    assert.strictEqual(actual, true);
  });

});
