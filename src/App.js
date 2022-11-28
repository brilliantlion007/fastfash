import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import inventory from "./assets/item-data.json";
import ClothingItem from "./components/ClothingItem";

function App() {

  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function remove4rmCart(name) {
    setCartItems(cartItems.filter(item => item.name !== name))
  }


  function calculateTotal() {

    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
    }
    return total.toFixed(2);
  }



  // Main visual layout html
  return (
    <div className="App">
      <header class="navbar-dark  bd-header py-3 d-flex align-items-stretch border-bottom border-dark navbar">
        <div class="container-fluid d-flex align-items-center">
          <h1 class="d-flex align-items-center fs-4 text-white mb-0">
            FastFash
          </h1>
          <div class="d-none d-xl-block">
            <a href="" class="px-5 link-light" hreflang="ar">New in</a>
            <a href="" class="px-5 link-light" hreflang="ar">Clothing</a>
            <a href="" class="px-5 link-light" hreflang="ar">Shoes</a>
            <a href="" class="px-5 link-light" hreflang="ar">Gifts</a>
            <a href="" class="px-5 link-light" hreflang="ar">Brands</a>
            <a href="" class="px-5 link-light" hreflang="ar">Tailoring</a>
            <a href="" class="px-5 link-light" hreflang="ar">Active Wear</a>
            <a href="" class="px-5 link-light" hreflang="ar">Winter</a>
            <a href="" class="px-5 link-light" hreflang="ar">Marketplace</a>
          </div>
          <div>
          </div>
        </div>

      </header>
      <div class="container-fullwidth">
        <div class="row">
          {/* main content area */}
          <div class="col-9">
            <div class="row" style={{ paddingTop: '3%', Left: '2%' }}>
              <div class="col">
                <h1 class="fs-4 text-black mb-0">
                  Current Students
                </h1>
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="search for student" aria-label="Username"
                    aria-describedby="basic-addon1"></input>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-outline-secondary">Search</button>
                  </div>
                </div>
              </div>
            </div>

            {/* tabs */}
            <div class="row" style={{ paddingLeft: '2%' }}>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Sculpture</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-5 link-dark" href="#">Graphic Design</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-5 link-dark" href="#">Photography</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-5 link-dark" href="#">Printing</a>
                </li>
              </ul>
            </div>

            {/* content cards */}
            <div class="row" style={{ paddingLeft: '2%', paddingTop: '2%' }}>
              <div class="card-group" style={{ display: 'flex', flexDirection: 'row' }}>
                {/* map bakeryData to BakeryItem components */}
                {inventory.map((item, index) => (
                  <p><ClothingItem item={item} addToCart={addToCart} /></p>
                ))}
              </div>
            </div>
          </div>

          {/* side bar cart */}
          <div class="col-3 d-none d-lg-block">

            <div class="d-flex flex-column flex-shrink-0 p-3 text-white sidebar">
              <h1 class="fs-4 text-white mb-0" style={{
                textAlign: 'center'
              }}>
                My Shopping Cart
              </h1>

              <hr></hr>
              {/* TODO: render a list of items in the cart */}
              <ul class="nav nav-pills flex-column mb-auto" style={{textAlign: 'left'}}>
                {cartItems.map((item, index) => (
                  <li class="nav-item">{item.name}
                    <button style={{float:"right"}} onClick={() => {remove4rmCart(item.name)}}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </li>
                ))}

              </ul>

              {/* <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <span class="badge badge-primary badge-pill">1</span>
                </li>
              </ul> */}


              <hr></hr>
              <h1 class="fs-4 text-white mb-0" style={{
                textAlign: 'right'
              }}>Total:{calculateTotal()}</h1>

            </div>


          </div>
        </div>
      </div>


    </div >
  );
}

export default App;


