import {itemList} from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CannedDriedFood = () => {
  return (
    <div>
      <h1> Canned and Dried Foods </h1>
      <div className="input-group rounded">
      <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" />
      <span className="input-group-text border-0" id="search-addon">
      <i><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></i>
      </span>
    </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item #</th>
            <th scope="col">Item Name</th>
            <th scope="col">Aisle #</th>
            <th scope="col">Section #</th>
            <th scope="col">Shelf #</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr key={item.id}>
              <td>{item.itemNo}</td>
              <td>{item.name}</td>
              <td>{item.aisle}</td>
              <td>{item.section}</td>
              <td>{item.shelf}</td>
              <td>{item.qty}</td>
            </tr>
          ))}              
        </tbody>
      </table>
    </div>
  )
};

export default CannedDriedFood;

//Note for future:
//Need to add a conditional statement to make the <50 red, and others green
//Search Bar!