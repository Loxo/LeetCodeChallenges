class Solution {
    public int searchInsert(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target || target <= nums[i] && (i == 0 || (i - 1 >= 0 && target >= nums[i - 1]))) {
                return i;
            }
        }
        return nums.length;
    }
}