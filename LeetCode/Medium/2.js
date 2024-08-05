// 2. Add Two Numbers

var addTwoNumbers = function (l1, l2) {
    let newList = new ListNode();
    let temp = newList;
    let total = 0;
    let carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        newList.next = new ListNode(num);
        newList = newList.next;
    }
    return temp.next;
};
