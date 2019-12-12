const { verify } = require('./keygen')
const { readFileSync, writeFile } = require('fs')
const { resolve } = require('path')

const p_keydata = resolve(__dirname, 'data.json')

const p_steam_keydata = resolve(__dirname, 'steam.key')

const keydata = JSON.parse(readFileSync(p_keydata).toString())

const steam_keydata = readFileSync(p_steam_keydata).toString().split('\n').filter((x)=>x.length)

module.exports = function (key) {
  key = key.toUpperCase()

  if (verify(key)) {
    if (keydata[key]) {
      if (keydata[key].status === 'deactivated') {
        return {
          status: 'deactivated',
          message: `${key} 通过了验证。\n但这个激活码的拥有者已申请退款，故已被销毁。`
        }
      } else {
        return {
          status: 'ok',
          message: `${key} 通过了验证。\n这个激活码曾经激活过。\n下面是为您查询到的 steam key：\n（当DLC公布后，这个列表可能会增加。）\n` + keydata[key].keys.join('\n')
        }
      }
    } else {
      const _key = steam_keydata.pop()
      keydata[key] = {
        status: 'activated',
        keys: [_key]
      }
      writeFile(p_steam_keydata, steam_keydata.join('\n'), () => void 0)
      writeFile(p_keydata, JSON.stringify(keydata), () => void 0)
      return {
        status: 'activated',
        message: `${key} 通过了验证，并且成功激活。\n下面是您的 steam key：\n（当DLC公布后，这个列表可能会增加。）\n` + keydata[key].keys.join('\n')
      }
    }
  } else {
    return {
      status: 'invalid',
      message: `${key} 是无效的。`
    }
  }

}
