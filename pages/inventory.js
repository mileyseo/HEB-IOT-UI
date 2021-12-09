import styles from "../styles/Home.module.css";

export default function Inventory() {
  return (
    <div className={styles.container}>
      <h2 className="header">Inventory List</h2>
      <div className="img">
        <div class="btn-group dropend">
          <button type="button" className="btn">
            Select Category
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Fruit {"&"} Vegetables
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Meat {"&"} Seafood
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Bakery {"&"} Bread
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Dairy {"&"} Eggs
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Deli {"&"} Prepared Food
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/pantry">
                {" "}
                Pantry{" "}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Frozen Food{" "}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Beverages
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Everyday Essentials
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Health {"&"} Beauty
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Home {"&"} Outdoor
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Baby {"&"} Kids
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {" "}
                Pets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
