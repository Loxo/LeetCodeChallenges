class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let a: string = "";
    let b: string = "";
    let listNode: ListNode | null = l1;
    let result: string[] = [];
    let listNodeRoot: ListNode | null = null;

    while (listNode != null) {
        a += listNode.val.toString();
        listNode = listNode.next;
    }
    listNode = l2;
    while (listNode != null) {
        b += listNode.val.toString();
        listNode = listNode.next;
    }
    result = (parseInt(a.split("").reverse().join(""), 10) + parseInt(b.split("").reverse().join(""), 10)).toString().split("").reverse();
    listNode = new ListNode(parseInt(result[0], 10), null);
    listNodeRoot = listNode;
    for (let i = 1; i < result.length; i++) {
        listNode.next = new ListNode(parseInt(result[i], 10), null);
        listNode = listNode.next;
    }
    return listNodeRoot;
};