function reverseList() {
    var list = document.getElementById("itemList");
    var items = Array.from(list.children);
    list.innerHTML = "";
    items.reverse().forEach(item => list.appendChild(item));
    list.appendChild(item)
}