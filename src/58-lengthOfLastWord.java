class Solution {
    public int lengthOfLastWord(String s) {
        String trimmedString = s.trim();
        int lastSpace = trimmedString.lastIndexOf(" ");

        return trimmedString.substring(lastSpace == -1 ? 0 : lastSpace + 1).length();
    }
}