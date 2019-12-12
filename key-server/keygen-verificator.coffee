md5 = require "md5"

regexp_str = "" +
"^" + "[a-zA-Z0-9]+" + "-"+
"[a-zA-Z0-9]+" + "-"+
"[a-zA-Z0-9]+" + "-"+
"[a-zA-Z0-9]+" + "-"+
"[a-zA-Z0-9]+" + "-"+
"[a-zA-Z0-9]+" + "$"

regexp = new RegExp regexp_str, "g"

verifyKey = (key) ->

  key = String key.toUpperCase()

  if !key.match regexp then return no

  mkey = skey = hash = shash = ""

  mkey = (key.match /^[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+/)[0]
  skey = (key.match /[a-zA-Z0-9]+-[a-zA-Z0-9]+$/)[0].toLowerCase()
  hash = md5(mkey + skey).slice(7, 7 + 4);

  return String("#{mkey}-#{hash}-#{skey}".toUpperCase()) == key

module.exports =
  verifyKey: verifyKey
