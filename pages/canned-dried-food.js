import { itemList } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import fetch from "node-fetch";
import ErrorPage from "next/error";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CannedDriedFood(props) {
  // console.log(props);
  const { posts, qty } = props;
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
            <th scope="col">Item #</th>
            <th scope="col">Item Name</th>
            <th scope="col">Aisle #</th>
            <th scope="col">Section #</th>
            <th scope="col">Shelf #</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <ul>
            <li>{JSON.stringify(posts.description)}</li>
            <li>{JSON.stringify(qty.product.quantity)}</li>
          </ul>

          {/*<tr key={JSON.stringify(post.description)}>*/}
          {/*    <td>{post.product_id}</td>*/}
          {/*    <td>{JSON.stringify(post.aisle)}</td>*/}
          {/*    <td>{JSON.stringify(post.section)}</td>*/}
          {/*    <td>{JSON.stringify(post.shelf)}</td>*/}
          {/*    <td>{posts.qty}</td>*/}
          {/*</tr>*/}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:3000/api/getVegetable?upc=7520000700"
  );
  const qty = await res.json();

  const res_ = await fetch(
    "https://eti-utdallas-iotshelf-dot-heb-eti-nonprod.uc.r.appspot.com/?upc=7520000700"
  );
  const posts = await res_.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
      qty,
    },
  };
}

export default CannedDriedFood;

//Note for future:
//Need to add a conditional statement to make the
//  <50 red, and others green
//Search Bar!

