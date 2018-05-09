/* eslint-disable no-extend-native */

String.prototype.replaceAll = function (searchString, replaceString) {
  return this.split(searchString).join(replaceString)
}

// Helper to replace certain things inside the documents at runtime, used to keep line lengths short
// Uses {{tag}} formatting

const tagRegex = /{{(.*?\S)}}/gi
const mdn = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects'
const eris = 'https://abal.moe/Eris/docs'

const mdnLinks = {
  string: `${mdn}/String`,
  object: `${mdn}/Object`,
  function: `${mdn}/Function`,
  boolean: `${mdn}/Boolean`,
  array: `${mdn}/Array`,
  number: `${mdn}/Number`,
  date: `${mdn}/Date`
}

const erisLinks = {
  member: `${eris}/Member`,
  textchannel: `${eris}/TextChannel`,
  guild: `${eris}/Guild`,
  message: `${eris}/Message`
}

const other = {
  currenttime: new Date().toUTCString(),
  // +1 month because of https://stackoverflow.com/questions/12254333/javascript-is-creating-date-wrong-month/12254344#12254344
  currentdate: `${new Date().getUTCDate()}.${parseInt(new Date().getUTCMonth()) + 1}.${new Date().getUTCFullYear()}`,
  now: Date.now(),
  nowrfc: new Date(Date.now()).toUTCString()
}

function parseTags (contentClassName) {
  const content = document.getElementsByClassName(contentClassName)[0].innerHTML
  const tags = content.match(tagRegex)

  let newText = content

  if (tags) {
    for (let tag of tags) {
      let raw = tag.slice(2, -2)

      if (mdnLinks.hasOwnProperty(raw)) newText = newText.replaceAll(tag, mdnLinks[raw])
      else if (erisLinks.hasOwnProperty(raw)) newText = newText.replaceAll(tag, erisLinks[raw])
      else if (other.hasOwnProperty(raw)) newText = newText.replaceAll(tag, other[raw])
      else return tag
    }
    document.getElementsByClassName(contentClassName)[0].innerHTML = newText
  }
}

// Run
parseTags('md-content')
