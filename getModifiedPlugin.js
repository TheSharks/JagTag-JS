// Script to get modified matchRecursive plugin for XRegExp and replace the distributed one with it

console.log('Getting modified XRegExp matchRecursive plugin from GitHub...')

const http = require('https')
const fs = require('fs')

const file = fs.createWriteStream('./node_modules/xregexp/lib/addons/matchrecursive.js')
const pluginUrl = 'https://cdn.rawgit.com/linuswillner/5542ad5e0c63ef3cff5201bb43d0b5be/raw/c4aeb5f6da95ba8f838d41fa7613db2eddaa981a/matchRecursive.js'

http.get(pluginUrl, res => {
  res.pipe(file)
  file.on('finish', () => { file.close(); console.log('Done.') })
})
