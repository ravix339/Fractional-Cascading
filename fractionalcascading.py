class FCNode:
    def __init__(self, value, prev, next):
        self.value = value
        self.prev = prev
        self.next = next
        self.original = True
        self.up = None
        self.down = None

class FCLinkedList:
    def __init__(self, values):
        self.head = FCNode(None, None, None)
        cursor = self.head
        for val in values:
            cursor.next = FCNode(val, cursor, None)
            cursor = cursor.next
        self.tail = FCNode(None, cursor, None)
        cursor.next = self.tail
    def __iter__(self):
        cursor = self.head.next
        while cursor != self.tail:
            yield cursor.value
            cursor = cursor.next

    def cascade(self, listabove, skipamount):
        

a = FCLinkedList([1,2,3,4,5,6,7])
for i in a:
    print(i)



