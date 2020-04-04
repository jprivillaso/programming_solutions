/**
 * https://leetcode.com/problems/shuffle-an-array/
 *
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */

class Solution {

    int[] original;
    int[] structure;

    public Solution(int[] nums) {
        this.original = nums.clone();
        this.structure = nums;
    }

    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return this.original;
    }

    /** Returns a random shuffling of the array. */
    public int[] shuffle() {

        Queue<Integer> queue = new LinkedList<Integer>();
        int N = this.structure.length;
        int[] shuffledArray = new int[N];

        for (int i = 0; i < N; ++i) {
            queue.add(structure[i]);
        }

        Random rand = new Random();

        while (!queue.isEmpty()) {

            Integer currentNumber = queue.poll();
            boolean inserted = false;

            while (!inserted) {

                int randomPosition = rand.nextInt(N);

                if (shuffledArray[randomPosition] == 0) {
                    shuffledArray[randomPosition] = currentNumber;
                    inserted = true;
                }

            }

        }

        return shuffledArray;

    }
}
