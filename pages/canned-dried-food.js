import { itemList } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import fetch from "node-fetch";
import ErrorPage from "next/error";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CannedDriedFood() {
  const [state, setState] = useState([]);
    useEffect(() => {
      axios
        .get(`/api/getVegetable`)
        .then((res) => {
          console.log(res.data);
          setState(res.data.product);
        })
        .catch((e) => {
          console.error(e);
        });
    }, []);

  return (
    <div>
      <h1> Canned and Dried Foods </h1>
      <div className="grouping">
        <button className="button button1"></button>
        <label className="langDescription" id="button1">
          Beans & Legumes
        </label>
      </div>
      <div className="grouping">
        <button className="button button2"></button>
        <label className="langDescription" id="button2">
          Fruit
        </label>
      </div>
      <div className="grouping">
        <button class="button button3"></button>
        <label className="langDescription" id="button3">
          Meat
        </label>
      </div>
      <div className="grouping">
        <button className="button button4"></button>
        <label className="langDescription" id="button4">
          Seafood
        </label>
      </div>
      <div className="grouping">
        <button className="button button5"></button>
        <label className="langDescription" id="button5">
          Vegtables
        </label>
      </div>
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0" id="search-addon">
          <i>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </i>
        </span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UPC</th>
            <th scope="col">Item Name</th>
            <th scope="col">Aisle #</th>
            <th scope="col">Aisle Side</th>
            <th scope="col">Section #</th>
            <th scope="col">Shelf #</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {state.map((product) => (
            <tr key={JSON.stringify(product.upc)}>
            <td>{JSON.stringify(product.upc)}</td>
            <td>{JSON.stringify(product.itemName)}</td>
            <td>{JSON.stringify(product.aisleNo)}</td>
            <td>{JSON.stringify(product.aisleSide)}</td>
            <td>{JSON.stringify(product.sectionNo)}</td>
            <td>{JSON.stringify(product.shelfNo)}</td>
            <td>{JSON.stringify(product.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CannedDriedFood;

//Note for future:
//Need to add a conditional statement to make the
//  <50 red, and others green
//Search Bar!