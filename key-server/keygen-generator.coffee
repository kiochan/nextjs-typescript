md5 = require "md5"

generateKey = (
  group_id,
  product_id,
  product_version
) ->

  group_id        = String( group_id        ).toUpperCase()
  product_id      = String( product_id      ).toUpperCase()
  product_version = String( product_version ).toUpperCase()

  if !group_id.match /[a-zA-Z0-9]+/
    throw new TypeError "asc-keygen >> group_id should be /[a-zA-Z0-9]+/"
  if !product_id.match /[a-zA-Z0-9]+/
    throw new TypeError "asc-keygen >> product_id should be /[a-zA-Z0-9]+/"
  if !product_version.match /[a-zA-Z0-9]+/
    throw new TypeError "asc-keygen >> product_version should be /[a-zA-Z0-9]+/"

  # init variable
  mkey = skey = hash = full_key = ""

  mkey = "#{group_id}-#{product_id}-#{product_version}"

  skey = "!???-!???????".replace /[!?]/g, (c) ->

    if '!' == c
      return ((new Date).getTime() % 24).toString(24)
    else
      return ((Math.random() * 24) | 0 % 24).toString(24)

    return

  hash = md5(mkey + skey).slice(7, 7 + 4)

  full_key = "#{mkey}-#{hash}-#{skey}".toUpperCase()

  return full_key

module.exports =
  generateKey: generateKey
