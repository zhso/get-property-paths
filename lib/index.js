/**
 * @param {Object} obj
 * @param {Object} config
 * @returns {Array}
 * @example
 * const obj = {
 *   a: {
 *     b: {
 *       c: 1,
 *     },
 *   },
 *   d: [{ c: 2, }],
 * }
 * const paths = getPaths(obj, { property: 'c' });
 * console.log(paths);
 * // ['a.b.c', 'd.0.c'];
 */
export default ((obj, config = {}) => {
  const {
    separator = '.',
    property
  } = config;
  const paths = [];
  const getPath = (o, prevPath) => {
    if (typeof o === 'object') {
      for (const i in o) {
        // eslint-disable-line
        const currentPath = prevPath ? [prevPath, i].join(separator) : i;

        if (!!property && i === property) {
          paths.push(currentPath);
        } else if (!property) {
          paths.push(currentPath);
        }

        if (typeof o[i] === 'object') {
          getPath(o[i], currentPath);
        }
      }
    }
  };

  getPath(obj);

  return paths;
});
//# sourceMappingURL=index.js.map