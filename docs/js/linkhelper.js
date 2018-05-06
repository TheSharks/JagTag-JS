/* eslint-disable no-extend-native */

String.prototype.replaceAll = function (searchString, replaceString) {
  return this.split(searchString).join(replaceString)
}

// Helper to replace links, helps to keep line lengths short
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
  guild: `${eris}/Guild`
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
      else return tag
    }
    document.getElementsByClassName(contentClassName)[0].innerHTML = newText
  }
}

// Run
parseTags('md-content')
