function enhance() {
  let obj = {};
  let verify = '';

  return function () {
    const args = arguments;
    const length = args.length - 1;

    const functionCall = (i) => {
      if (i >= length) {
        return args[i];
      }
      if (typeof args[i] == 'function') {
        return args[i](functionCall(i + 1));
      }
    };

    const functionCallReverse = (i) => {
      if (i < 0) return i;
      if (typeof args[i] == 'function') {
        args[i](functionCallReverse(i - 1));
      } else {
        functionCallReverse(i - 1);
      }
      console.log('LENGTH: ', i);
    };

    // functionCallReverse(length);
    return functionCall(0);
  };
}
module.exports = enhance();
