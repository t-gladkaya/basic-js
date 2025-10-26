const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const elements = domains.map(element => element.split('.').reverse());
  let result = {};

  elements.forEach(subArray => {
    let dnsPart = '';

    subArray.forEach(el => {
      dnsPart = dnsPart ? `${dnsPart}.${el}` : `.${el}`;
      result[dnsPart] = (result[dnsPart] || 0) + 1;
    })
  })
  return result;
}

module.exports = {
  getDNSStats
};
