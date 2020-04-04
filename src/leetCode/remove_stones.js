var removeStones = function(stones) {
  if (stones.length < 2) return 0;

  let moves = 0;
  let sets = [];
  let cache = {};

  for (let i = 0; i < stones.length; ++i) {

      const [row, col] = stones[i];

      if (sets.length === 0) {
          sets.push([stones[i]]);
          cache[stones[i].join('')] = 0;
      } else {

          let found = false;
          for (let j = 0; j < i; ++j) {

              if (i === j) continue;

              const [row2, col2] = stones[j];

              if (row === row2 || col === col2) {

                  const position = `${row2}${col2}`;
                  sets[cache[position]].push(stones[i]);
                  cache[stones[i].join('')] = cache[position];
                  found = true;
                  break;

              }

          }

          if (!found) {
              sets.push([stones[i]]);
              cache[stones[i].join('')] = sets.length - 1;

          }

      }

  }

  for (let i = 0; i < sets.length; ++i) {
      moves += sets[i].length - 1;
  }

  return moves;

};

console.log(removeStones([[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]]));
// console.log(removeStones([[0, 1], [1, 2], [1, 3], [3, 3], [2, 3], [0, 2]]));
// console.log(removeStones([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]));
