import buble from '@rollup/plugin-buble';

export default [
  {
    input: "src/codemirror.js",
    output: {
      banner: `// CodeMirror, copyright (c) by Marijn Haverbeke и другие
// Распространяется по лицензии MIT: https://codemirror.net/LICENSE
// Это CodeMirror (https://codemirror.net), редактор кода, реализованный на JavaScript поверх DOM браузера.
// Некоторую техническую информацию о коде можно найти ниже по адресу http://marijnhaverbeke.nl/blog/#cm-internals .
`,
      format: "umd",
      file: "lib/codemirror.js",
      name: "CodeMirror"
    },
    plugins: [ buble({namedFunctionExpressions: false}) ]
  },
  {
    input: ["src/addon/runmode/runmode-standalone.js"],
    output: {
      format: "iife",
      file: "addon/runmode/runmode-standalone.js",
      name: "CodeMirror",
      freeze: false, // IE8 не поддерживает Object.freeze.
    },
    plugins: [ buble({namedFunctionExpressions: false}) ]
  },
  {
    input: ["src/addon/runmode/runmode.node.js"],
    output: {
      format: "cjs",
      file: "addon/runmode/runmode.node.js",
      name: "CodeMirror",
      freeze: false, // IE8 не поддерживает Object.freeze.
    },
    plugins: [ buble({namedFunctionExpressions: false}) ]
  },
];
