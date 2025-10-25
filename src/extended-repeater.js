const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const mainLine = String(str);

  const hasProperty = (el) => Object.prototype.hasOwnProperty.call(options, el);

  const repeatTimes = hasProperty("repeatTimes") ? Number(options.repeatTimes) : 1;
  const separator = hasProperty("separator")? String(options.separator) : "+";
  const addition = hasProperty("addition") ? String(options.addition) : "";
  const additionRepeatTimes = hasProperty("additionRepeatTimes") ? Number(options.additionRepeatTimes) : 1;
  const additionSeparator = hasProperty("additionSeparator") ? String(options.additionSeparator) : "|";

  const secondPartOfLine = additionRepeatTimes > 0
    ? new Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    : "";

  const wholeLine = mainLine + secondPartOfLine;

  return repeatTimes > 0
    ? new Array(repeatTimes).fill(wholeLine).join(separator)
    : "";
}

module.exports = {
  repeater
};
