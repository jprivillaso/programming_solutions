/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {*} s
 */
var isValid = function(s) {

  const tokensMap = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  const stack = [];
  let validTokens = 0;

  const splittedS = s.split('');
  for (let i = 0; i < splittedS.length; ++i) {

      const currentToken = splittedS[i];

      if (tokensMap[currentToken]) {
          stack.push(currentToken);
      } else {

          const expectedCloseToken = tokensMap[stack.pop()];

          if (expectedCloseToken === currentToken) {
            validTokens += 1;
          }

      }

  }

  return validTokens === s.length / 2;

};

console.log(isValid(''));
console.log(isValid('['));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));