import java.util.*;

// Java program to print all permutations of a
// given string.
public class Permutation
{
    public Set<String> pairs = new HashSet<String>();

    public static void main(String[] args)
    {
        String str = "1234";
        int n = str.length();
        Permutation permutation = new Permutation();
        permutation.permute(str, 0, n-1);
        System.out.println(permutation.getPairs());

    }

    /**
     * permutation function
     * @param str string to calculate permutation for
     * @param l starting index
     * @param r end index
     */
    private void permute(String str, int l, int r)
    {
        if (l == r) {

            String[] singlePair = str.substring(0, 2).split("");
            Integer first = Integer.parseInt(singlePair[0]);
            Integer last = Integer.parseInt(singlePair[1]);
            String pairAsString = Math.min(first, last) + "" + Math.max(first, last);
            this.pairs.add(pairAsString);

        } else {
            for (int i = l; i <= r; i++)
            {
                str = swap(str,l,i);
                permute(str, l+1, r);
                str = swap(str,l,i);
            }
        }
    }

    /**
     * Swap Characters at position
     * @param a string value
     * @param i position 1
     * @param j position 2
     * @return swapped string
     */
    public String swap(String a, int i, int j)
    {
        char temp;
        char[] charArray = a.toCharArray();
        temp = charArray[i] ;
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return String.valueOf(charArray);
    }

    public Set<String> getPairs() {
        return this.pairs;
    }

}