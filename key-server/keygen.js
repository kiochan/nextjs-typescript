require('coffeescript').register();

module.exports = {
  generate: require('./keygen-generator').generateKey,
  verify: require('./keygen-verificator').verifyKey
}
