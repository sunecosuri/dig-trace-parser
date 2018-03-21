const { format, promisify } = require('util')
const exec = promisify(require('child_process').exec)

async function parseDig(output) {
  console.log('parseDigの結果', output)
  const lines = output.split(/\n/)
  const result = {
    A: [],
    CNAME: [],
  }
  for (const line of lines) {
    if (/^A (.*) from/.test(line)) {
      const scn = line.match(/^A (.*). from/)[1]
      result.A.push(scn)
    }
    if (/^CNAME (.*) from/.test(line)) {
      const scn = line.match(/^CNAME (.*). from/)[1]
      result.CNAME.push(scn)
    }
  }
  return result
}

/**
 * Dig trace option wrapper method.
 *
 * @param {String} name
 * @returns {{A: String[], CNAME: String[]}} results
 */
function dig(name) {
  return new Promise(async (resolve, reject) => {
    if (typeof (name) !== 'string') {
      throw new TypeError('name (string) is required')
    }

    const cmd = format('dig %s +time=3 +retry=1 +trace +short', name)
    console.log('コマンド', cmd)
    const { stdout, stderr } = await exec(cmd, { maxBuffer: 1024 * 1024 })
    console.log('出力', stdout, stderr)
    try {
      const results = await parseDig(stdout)
      resolve(results)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = dig
module.exports.default = dig
