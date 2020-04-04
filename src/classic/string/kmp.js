function computeLPS(pattern) {

  let lps = [0];
  let len = 0;
  let i = 1;

  while (i < pattern.length) {

    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {

      if (len != 0) {
        len = lps[len - 1];
      } else {

        lps[i] = len;
        i++;

      }

    }

  }

  return lps;

}

function kmp(word, pattern) {

  let lps = computeLPS(pattern);

  for (let i = 0, j = 0; i < word.length;) {

    if (word.charAt(i) === pattern.charAt(j)) {
      ++i;
      ++j;
    }

    if (j === pattern.length) {
      console.log(`Pattern found at index ${i - pattern.length}`);
      j = lps[j - 1];
    } else if (i < word.length && word.charAt(i) !== pattern.charAt(j)) {

      if (j !== 0) {
        j = lps[j - 1];
      } else {
        ++i;
      }

    }

  }

}

kmp('AAAAABAAAABA', 'BA');