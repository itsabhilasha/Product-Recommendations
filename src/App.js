import React, { useState } from "react";
import "./styles.css";
import { recommendations } from "./recommendations";

var catData = recommendations;

var categories = ["Top", "Skincare", "Lipcare", "Haircare"];

export default function App() {
  var [catDetail, setCatDetail] = useState(catData[0].Top);
  var [active, setActive] = useState("Top");

  function catHandler(event) {
    var selectedCat = event.target.innerHTML;
    setActive(selectedCat);
    for (var detailArray of catData) {
      if (selectedCat in detailArray) {
        setCatDetail(detailArray[selectedCat]);
      }
    }
  }
  return (
    <div className="App">
      <div id="header-site">
        <h1>Self Care Product Recommendations</h1>
      </div>
      <ul>
        {categories.map((item) => (
          <li key={item}>
            <button
              className={active === item ? "selected" : ""}
              onClick={catHandler}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {catDetail.map((item) => (
          <li key={item.name}>
            <div className="product-container">
              <div className="product-title">
                <a className="product-link" href={item.nykaa}>
                  {item.name}
                </a>
              </div>

              <div className="product-desc">{item.review}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
