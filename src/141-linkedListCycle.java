public class Solution {
    Set<ListNode> set = new HashSet<ListNode>();

    public boolean hasCycle(ListNode head) {
        ListNode list = head;

        while (list != null && list.next != null) {
            if (set.contains(list.next)) {
                return true;
            }
            set.add(list);
            list = list.next;
        }
        return false;
    }
}