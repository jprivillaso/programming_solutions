/**
  https://leetcode.com/problems/number-of-islands/
 */

class Solution {

    public void dfs(int i, int j, char[][] grid) {

        // starting point will be root
        Queue<int[]> queue = new LinkedList<int[]>();
        queue.add(new int[]{i, j});

        int N = grid.length;
        int M = grid[0].length;

        while (!queue.isEmpty()) {

            int[] currentNode = queue.poll();
            int x = currentNode[0];
            int y = currentNode[1];

            grid[x][y] = '0';

            int up = x - 1;
            int down = x + 1;
            int left = y - 1;
            int right = y + 1;

            // move up
            if (up >= 0 && grid[up][y] == '1') {
                queue.add(new int[]{up, y});
                grid[up][y] = '0';
            }

            // move down
            if (down < N && grid[down][y] == '1') {
                queue.add(new int[]{down, y});
                grid[down][y] = '0';
            }

            // move left
            if (left >= 0 && grid[x][left] == '1') {
                queue.add(new int[]{x, left});
                grid[x][left] = '0';
            }

            // move right
            if (right < M && grid[x][right] == '1') {
                queue.add(new int[]{x, right});
                grid[x][right] = '0';
            }

        }

    }

    public int numIslands(char[][] grid) {

        if (grid == null || grid.length == 0) return 0;

        int roots = 0;

        for (int i = 0; i < grid.length; ++i) {
            for (int j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] == '1') {
                    roots += 1;
                    dfs(i, j, grid);
                }
            }
        }

        return roots;

    }
}