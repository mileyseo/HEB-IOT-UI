import Link from 'next/link'

export default function Aisle() {
    return (
        <div>
            <h2> Aisle 6</h2>
            <div className="dropdown m-3 dropend">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        id="dropdownMenuButton1" aria-expanded="false">
                    Left {" "}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#"> Fruit {"&"} Vegetables</a></li>
                    <li><a className="dropdown-item" href="#"> Meat {"&"} Seafood</a></li>
                    <li><a className="dropdown-item" href="#"> Bakery {"&"} Bread</a></li>
                    <li><a className="dropdown-item" href="#"> Dairy {"&"} Eggs</a></li>
                    <li><a className="dropdown-item" href="#"> Deli {"&"} Prepared Food</a></li>
                    <li><a className="dropdown-item" href="/pantry"> Pantry </a></li>
                    <li><a className="dropdown-item" href="#"> Frozen Food </a></li>
                    <li><a className="dropdown-item" href="#"> Beverages</a></li>
                    <li><a className="dropdown-item" href="#"> Everyday Essentials</a></li>
                    <li><a className="dropdown-item" href="#"> Health {"&"} Beauty</a></li>
                    <li><a className="dropdown-item" href="#"> Home {"&"} Outdoor</a></li>
                    <li><a className="dropdown-item" href="#"> Baby {"&"} Kids</a></li>
                    <li><a className="dropdown-item" href="#"> Pets</a></li>
                </ul>
            </div>

            <div className="dropdown m-3 dropend">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        id="dropdownMenuButton1" aria-expanded="false">
                    Right {" "}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#"> Fruit {"&"} Vegetables</a></li>
                    <li><a className="dropdown-item" href="#"> Meat {"&"} Seafood</a></li>
                    <li><a className="dropdown-item" href="#"> Bakery {"&"} Bread</a></li>
                    <li><a className="dropdown-item" href="#"> Dairy {"&"} Eggs</a></li>
                    <li><a className="dropdown-item" href="#"> Deli {"&"} Prepared Food</a></li>
                    <li><a className="dropdown-item" href="/pantry"> Pantry </a></li>
                    <li><a className="dropdown-item" href="#"> Frozen Food </a></li>
                    <li><a className="dropdown-item" href="#"> Beverages</a></li>
                    <li><a className="dropdown-item" href="#"> Everyday Essentials</a></li>
                    <li><a className="dropdown-item" href="#"> Health {"&"} Beauty</a></li>
                    <li><a className="dropdown-item" href="#"> Home {"&"} Outdoor</a></li>
                    <li><a className="dropdown-item" href="#"> Baby {"&"} Kids</a></li>
                    <li><a className="dropdown-item" href="#"> Pets</a></li>
                </ul>
            </div>
        </div>
    )
}
