/*
Script to get modified plugins required by JagTag-JS

Plugins:
- Modified matchRecursive plugin for XRegExp (This script patches the installed version)
- Ramda.path() bundled in the smallest possible size
*/

console.log('Getting modified plugins...')

const http = require('https')
const fs = require('fs')

const plugins = require('./plugins.json').plugins

for (const plugin of plugins) {
  const file = fs.createWriteStream(plugin.file)
  http.get(plugin.url, res => {
    res.pipe(file)
    file.on('finish', () => {
      file.close()
      console.log(`Finished getting ${plugin.name}.`)
    })
  })
}
