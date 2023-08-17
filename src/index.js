module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let countLast = 0;
  let index = 0;
  str = str.split('');
  masiv = [].concat(...bracketsConfig);
  if (str.length % 2 !== 0) {
    return false;
  }
  for (let elem of str) {
    for (let i = 0; i < masiv.length; i++) {
      if (elem === masiv[i]) {
        if (masiv[i] === masiv.at(-1) && masiv[i] === masiv.at(-2)) {
          if( countLast === 0) {
            stack.push(masiv[i]);
            countLast += 1;
            i = masiv.length;
          } else {
            if (stack.at(-1) === masiv[i]) {
              stack.pop();
              countLast = countLast - 1;
              i = masiv.length;
            } else {
              return false;
            }
          }
        } else if (masiv[i] === masiv[i + 1]){
          if( index === 0) {
            stack.push(masiv[i]);
            index += 1;
            i = 10000;
          } else {
            if (stack.at(-1) === masiv[i]) {
              stack.pop();
              index = index - 1;
              i = 10000;
            } else {
              return false;
            }
          }
        } else {
          if (i === 0 || i % 2 === 0) {
            stack.push(masiv[i])
          } else if (i % 2 !== 0) {
            if (stack.at(-1) === masiv[i - 1]) {
              stack.pop();
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
}
