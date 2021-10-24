class Item{

    constructor(name, id, aisle, qty) {
        this._name = name;
        this._id = id;
        this._aisle = aisle;
        this._qty = qty;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get aisle() {
        return this._aisle;
    }

    get qty() {
        return this._qty;
    }

    toString(){
        return "name: " + this._name + " id: " + this._id + " aisle: " + this._aisle + " qty " + this._qty;
    }


}