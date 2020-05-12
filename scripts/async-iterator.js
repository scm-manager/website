/**
 * @param {function(page: number): Promise<{done: boolean, value: any}>} fn
 * @returns {{[Symbol.asyncIterator](): {next: function(): Promise<{result: any, done}>, page: number}}|{next: (function(): {result: *, done: boolean}), page: number}}
 */
function asyncItr(fn) {
  return {
    [Symbol.asyncIterator]() {
      return {
        page: 0,
        done: false,
        async next() {
          if (this.done) {
            return { done: true };
          }
          const { done, value } = await fn(this.page++);
          this.done = done;
          return {
            done: false,
            value,
          };
        },
      };
    },
  };
}

exports.asyncIterator = asyncItr;
