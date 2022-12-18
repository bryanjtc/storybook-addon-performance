import {
  __commonJS,
  __toESM
} from "./chunk-22M6QDW2.mjs";

// ../../node_modules/global/window.js
var require_window = __commonJS({
  "../../node_modules/global/window.js"(exports, module) {
    var win;
    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof global !== "undefined") {
      win = global;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }
    module.exports = win;
  }
});

// ../../node_modules/@storybook/client-logger/dist/index.mjs
var import_global = __toESM(require_window(), 1);
var { LOGLEVEL, console } = import_global.default;
var levels = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 };
var currentLogLevelString = LOGLEVEL;
var currentLogLevelNumber = levels[currentLogLevelString] || levels.info;
var logger = { trace: (message, ...rest) => currentLogLevelNumber <= levels.trace && console.trace(message, ...rest), debug: (message, ...rest) => currentLogLevelNumber <= levels.debug && console.debug(message, ...rest), info: (message, ...rest) => currentLogLevelNumber <= levels.info && console.info(message, ...rest), warn: (message, ...rest) => currentLogLevelNumber <= levels.warn && console.warn(message, ...rest), error: (message, ...rest) => currentLogLevelNumber <= levels.error && console.error(message, ...rest), log: (message, ...rest) => currentLogLevelNumber < levels.silent && console.log(message, ...rest) };
var logged = /* @__PURE__ */ new Set();
var once = (type) => (message, ...rest) => {
  if (!logged.has(message))
    return logged.add(message), logger[type](message, ...rest);
};
once.clear = () => logged.clear();
once.trace = once("trace");
once.debug = once("debug");
once.info = once("info");
once.warn = once("warn");
once.error = once("error");
once.log = once("log");
var deprecate = once("warn");
var pretty = (type) => (...args) => {
  let argArray = [];
  if (args.length) {
    let startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi, endTagRe = /<\/span>/gi, reResultArray;
    for (argArray.push(args[0].replace(startTagRe, "%c").replace(endTagRe, "%c")); reResultArray = startTagRe.exec(args[0]); )
      argArray.push(reResultArray[2]), argArray.push("");
    for (let j = 1; j < args.length; j++)
      argArray.push(args[j]);
  }
  logger[type].apply(logger, argArray);
};
pretty.trace = pretty("trace");
pretty.debug = pretty("debug");
pretty.info = pretty("info");
pretty.warn = pretty("warn");
pretty.error = pretty("error");

export {
  require_window,
  logger
};
