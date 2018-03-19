const { format, promisify } = require('util')
const exec = promisify(require('child_process').exec)

async function parseDig(output) {
  const lines = output.split(/\n/)
  const result = []
  for (const line of lines) {
    if (/^A (.*) from/.test(line)) {
      const scn = line.match(/^A (.*) from/)[1];
      result.push(scn)      
    }
  }
  return result
}

/**
 * Dig trace option wrapper method.
 *
 * @param {String} name
 * @returns {Array} results
 */
function dig(name) {
  return new Promise(async (resolve, reject) => {
    if (typeof (name) !== 'string') {
      throw new TypeError('name (string) is required')
    }

    const cmd = format('dig %s +time=1 +retry=0 +trace +short', name)
    const std = await exec(cmd)
    const result = await parseDig(std.stdout).catch((err) => {
      reject(err)
    })
    resolve(result)
  })
}

module.exports = dig
module.exports.default = dig
