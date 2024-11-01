'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(val) {
      this.result += val;

      return this;
    },
    subtract(val) {
      this.result -= val;

      return this;
    },
    multiply(val) {
      this.result *= val;

      return this;
    },
    divide(val) {
      if (val === 0) {
        return 'Cannot divide by zero.';
      } else {
        this.result /= val;
      }

      return this;
    },
    operate(operation, value) {
      if (typeof operation === 'function') {
        operation.call(this, value);
      } else {
        throw new Error(`${operation} is not a function`);
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
