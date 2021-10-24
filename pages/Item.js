class Item{

    constructor(name, id, aisle, qty) {
        this._name = name;
        this._id = id;
        this._aisle = aisle;
        this._qty = qty;
    }

    let items = [
        {
            "name" : "H‑E‑B Select Ingredients Crisp N' Sweet Whole Kernel Corn";
            "id": 1;
            "aisle" : 6;
            "qty" : 100;

        },
        {
            "name" : "H‑E‑B Select Ingredients Cut Green Beans";
            "id": 2;
            "aisle" : 6;
            "qty" : 123;

        },
        {
            "name" : "H‑E‑B Organics Diced Tomatoes";
            "id": 3;
            "aisle" : 6;
            "qty" : 234;

        },
        {
            "name" : "H‑E‑B Select Ingredients Whole Kernel Corn";
            "id": 4;
            "aisle" : 6;
            "qty" : 234;

        },
    ]

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