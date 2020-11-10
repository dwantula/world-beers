import React from 'react';
import {AllBeers} from "react"
import './styles.css';

function NavigationComponent()  {
  return (
    <div>
      <nav className="nav">
        <a href="../../../WorldBeers" className="title">World Beers</a>
        <ul className="nav-links">
          <li>
            <a href="../../AllBeers">AllBeers</a>
          </li>
          <li>
            <a href="##">Alcohol beers</a>
              {/* <ul className="list-menu">
                <li><a href="##">Alcohol By Volume  4,5</a></li>
                <li><a href="#">Alcohol By Volume 9</a></li>
                <li><a href="#">Alcohol By Volume 10 and more</a></li>
              </ul> */}
          </li>
          <li>
            <a href="###">Alcohol-free beers</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationComponent;