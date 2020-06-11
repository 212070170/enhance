const enhance = require('./enhance');
const console1 = (arg) => {
  arg = arg + ' x ';
  return arg;
};
const console2 = (arg) => {
  arg = arg + ' o ';
  return arg;
};
const addConsole = (arg) => {
  arg = arg + ' - ';
  return arg;
};

const fab = enhance(console1, console2, addConsole, 'Fabio');
console.log(fab);
