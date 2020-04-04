/**
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function compare(letterA, letterB, orderMap) {

    const minLength = Math.min(letterA.length, letterB.length);
    let isOrdered = true;
    let diffCount = 0;

    for (let i = 0; i < minLength; i++) {

        if (orderMap[letterA[i]] !== orderMap[letterB[i]]) {

            diffCount += 1;

            if (orderMap[letterA[i]] > orderMap[letterB[i]]) {
                isOrdered = false;
            } else {
                isOrdered = true;
            }

            break;

        }

    }

    // This covers the last case in which both letteres start with the same prefix
    // but the length of the first is greater, then is not ordered
    if (diffCount === 0 && letterA.length > letterB.length) {
        isOrdered = false;
    }

    return isOrdered;

  }

  var isAlienSorted = function(words, order) {

    const orderMap = {};

    order.split('').forEach((letter, index) => {
        orderMap[letter] = index;
    });

    let isOrdered = true;

    for (let i = 0, j = 1; j < words.length; i++, j++) {

        if (!compare(words[i].split(''), words[j].split(''), orderMap)) {
            isOrdered = false;
            break;
        }

    }

    return isOrdered;

  };