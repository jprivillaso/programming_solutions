var minIncrementForUnique = function(A) {

  if (A.length < 2) return 0;

  let changes = 0;

  A.sort();

  for (let i = 0, j = i + 1; j < A.length; ++i, ++j) {
      if (A[i] === A[j]) {
          A[j] += 1;
          changes += 1;
      } else if (A[i] > A[j]) {
          const temp = A[j];
          A[j] = A[i] + 1;
          changes += A[j] - temp;
      }

  }

  return changes;

};

console.log(minIncrementForUnique([3,3,0,2,0,9,2,11,10,14,5,13,6,5,1]));