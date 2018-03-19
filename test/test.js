'use strict'

const test = require('ava')
const dig = require('..')

test('default export', (t) => {
  t.is(dig, dig.default)
})

test('return promise', async (t) => {
  const domain = 'www.example.com'
  const result = await dig(domain)
  t.deepEqual(result, ['93.184.216.34'])
})

test('return promise', async (t) => {
  const domain = 'example.test'
  const result = await dig(domain)
  t.deepEqual(result, ['93.184.216.34'])
})
