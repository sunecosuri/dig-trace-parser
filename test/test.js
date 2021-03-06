'use strict'

const test = require('ava')
const dig = require('..')

test('default export', (t) => {
  t.is(dig, dig.default)
})

test('when exist domain', async (t) => {
  const domain = 'www.example.com'
  const result = await dig(domain)
  t.deepEqual(result, { A: ['93.184.216.3'], CNAME: [] })
})

test('when not exist domain', async (t) => {
  const domain = 'example.test'
  const result = await dig(domain)
  t.deepEqual(result, { A: [], CNAME: [] })
})
