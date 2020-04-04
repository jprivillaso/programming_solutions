/**
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 *
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {

    if (A.length < 2) return 0;

    let changes = 0;

    A.sort((a, b) => a - b);

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