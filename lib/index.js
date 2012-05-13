/**
 * Module dependencies.
 */
var time = require('./middleware/time')
  , timeResultParser = require('./middleware/timeResultParser');

/**
 * Expose middleware.
 */
exports = module.exports = time;
exports.time = time;
exports.timeResultParser = timeResultParser;
