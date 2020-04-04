// https://leetcode.com/problems/shortest-completing-word/

class Solution {

    public int[] count(String word) {

        int[] ans = new int[26];

        for (char letter: word.toCharArray()) {

            int index = Character.toLowerCase(letter) - 'a';

            if (index >= 0 && index < 26) {
                ans[index] += 1;
            }

        }

        return ans;

    }

    public boolean dominates(int[] currentWord, int[] target) {
        for (int i = 0; i < currentWord.length; ++i) {
            if (currentWord[i] < target[i]) return false;
        }
        return true;
    }

    public String shortestCompletingWord(String licensePlate, String[] words) {

        int[] target = count(licensePlate);
        String ans = "";

        for (int i = 0; i < words.length; ++i) {
            if ((words[i].length() < ans.length() || ans.length() == 0) &&
               dominates(count(words[i]), target)) {
                ans = words[i];
            }
        }

        return ans;

    }
}