let marked = require('marked');

module.exports = function (str) {
  /* return html string */
  let temp_str = str.replace(/@{2}(.+?)@{2}/g, "<blink>$1</blink>");
  return marked(temp_str);
}

// Implement a custom markdown operator that will translate all text between
//   `@@...@@` and into`<blink>...</blink>` tags.

// For example, `@@whatever@@` becomes`<blink>whatever</blink>`.

// In addition to the`@@...@@` operator, your code should support existing markdown
// syntax, including inside`@@...@@` operators.

// Your code should accept a string of markdown as input and return a string of
// html output.Here's a template that you can use:

// module.exports = function (str) {
//   /* return html string */
// }

// For this task, use the`marked` module: `npm install marked`