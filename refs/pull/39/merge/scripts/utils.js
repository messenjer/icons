const { camelCase } = require("camel-case");

module.exports = {
  /**
   * Converts a filename to title
   * @param {String} filename The filename to convert (without full path)
   */
  filenameToTitle: (filename) => camelCase(filename.replace(/\.[^.]+$/gi, "")),
};
