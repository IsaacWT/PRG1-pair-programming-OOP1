class ShoppingItem{
    _itemName;
    _itemQuantity;
    _itemStatus;

    constructor(itemName, itemQuantity, itemStatus) {
        this._itemName = itemName;
        this._itemQuantity = itemQuantity;
        this.itemStatus = itemStatus;
    }

    get itemName() {
        return this._itemName;
    }

    set itemQuantity(itemQuantity) {
        this._itemQuantity = itemQuantity;
    }

    get itemQuantity() {
        return this._itemQuantity;
    }

    get itemStatus() {
        return this._itemStatus;
    }

    set itemStatus(itemStatus) {
        this._itemStatus = itemStatus;
    }
}

class ShoppingList{

    constructor() {
        this.shoppingList = [];
    }

    addItem(item){
        this.shoppingList.push(item);
        return `Item added to list.`
    }

    getNumItems() {
        let itemCount = 0;
        for (let i = 0; i < this.shoppingList.length; i++) {
            itemCount++;
        } return `Number of items on list is: ${itemCount}`;
    }

    getListOfItems() {
        for (let i = 0; i < this.shoppingList.length; i++) {
            console.log(`${this.shoppingList[i].itemName}: ${this.shoppingList[i].itemStatus}`);
        } return "End of List.";
    }

    removeItem(itemName){
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i].itemName === itemName) {
                this.shoppingList.splice(i, 1);
                return `${itemName} removed from list.`;
            } 
        } return `${itemName} is not on your shopping list.`;
    }

    getItemStatus(itemName) {
        for (let i = 0; i < this.shoppingList.length; i++) {
            if (this.shoppingList[i].itemName === itemName) {
            } 
        } return `${itemName}: ${this.shoppingList[i].itemStatus}`;
    }

    changeItemStatus(itemName) {
        for (let i = 0; i < this.shoppingList.length; i++) {
            let itemStatus = this.shoppingList[i].itemStatus
            if (this.shoppingList[i].itemName === itemName) {
                itemStatus = "Purchased";
            } 
        } return `${itemName}: ${this.shoppingList[i].itemStatus}`;
    }
}

let ourShoppingList = new ShoppingList();
let item1 = new ShoppingItem("Milk", 1, "Not Purchased");
let item2 = new ShoppingItem("Eggs", 6, "Not Purchased");
console.log(item1.itemName);

console.log(item2.itemQuantity = 12);
console.log(ourShoppingList.addItem(item1));
// console.log(ourShoppingList.getNumItems());
// console.log(ourShoppingList.addItem(item2));
// console.log(ourShoppingList.addItem(new ShoppingItem("Sugar", 2, "Not Purchased")));
// console.log(ourShoppingList.getNumItems());
// console.log(ourShoppingList.getListOfItems());
// console.log(ourShoppingList.removeItem("Milk"));
// console.log(ourShoppingList.getListOfItems());
// console.log(ourShoppingList.getItemStatus("Milk"));
console.log(ourShoppingList.changeItemStatus("Milk"));
console.log(ourShoppingList.getListOfItems());


