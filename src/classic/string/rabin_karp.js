/**
 * Pattern search algorithm. It uses slices of the window to search for patterns
 * inside a text.
 * Best case O(n + m)
 * Worst case O(n*m)
 */

function compareEachCharacter(word, pattern, index) {

  let i = 0;
  for (i = 0; i < pattern.length; ++i) {
    if (word.charAt(i + index) !== pattern.charAt(i)) break
  }

  if (i === pattern.length) console.log(`Found match at index ${index}`);

}

function rabinKarp(word, pattern) {

  if (pattern.length > word.length) return;

  const wLength = word.length;
  const pLength = pattern.length;

  const prime = 101;
  const d = 256;

  let h = 1;
  for (i = 0; i < pLength - 1; ++i) {
    h = (h * d) % prime;
  }

  let pHash = 0;
  let wHash = 0;

  // Calculate the first window for both pattern and word
  for (i = 0; i < pLength; i++) {
    pHash = (d * pHash + pattern.charCodeAt(i)) % prime;
    wHash = (d * wHash + word.charCodeAt(i)) % prime;
  }

  for (let i = 0; i < wLength - pLength; ++i) {

    if (pHash === wHash) {
      compareEachCharacter(word, pattern, i);
    }

    wHash = (d * (wHash - word.charCodeAt(i) * h) + word.charCodeAt(i + pLength) ) % prime;
    if (wHash < 0) wHash += prime;

  }

}

rabinKarp('GEEKSFORGEEKS', 'GEEK');
rabinKarp('AABBCCDDEE', 'CD');