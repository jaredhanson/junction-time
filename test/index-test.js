var vows = require('vows');
var assert = require('assert');
var time = require('index');


vows.describe('junction-time').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(time);
      assert.isFunction(time.time);
      assert.isFunction(time.timeResultParser);
    },
  },
  
}).export(module);
