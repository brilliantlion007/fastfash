import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import inventory from "./assets/item-data.json";
import ClothingItem from "./components/ClothingItem";


function App() {

  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const [iventoryItems, setIventoryItems] = useState(inventory)



  const sortCheapFirst = () => {
    setIventoryItems((data) => {
      const dataToSort = [...data];
      dataToSort.sort((a, b) => Number(a.price) - Number(b.price));
      return dataToSort;
    });
  };

  const sortCheapLast = () => {
    setIventoryItems((data) => {
      const dataToSort = [...data];
      dataToSort.sort((a, b) => (b.price -a.price ));
      return dataToSort;
    });
  };


  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function remove4rmCart(name) {
    setCartItems(cartItems.filter(item => item.name !== name))
  }

  function filterInventory(param) {
    if (param == "all") {
      setIventoryItems(inventory)
    } else {
      setIventoryItems(inventory.filter(item => item.filter !== param))
    }
  }

  // function sortByPrice(){
  //   const sorted = iventoryItems.sort((a, b) => {
  //     return b.price - a.price;
  //   });
  //   console.log(sorted)
  //   setIventoryItems(sorted)
  // }

  


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
            <a href="" class="px-5 link-light" hreflang="ar">Cakes</a>
            <a href="" class="px-5 link-light" hreflang="ar">Gifts</a>
            <a href="" class="px-5 link-light" hreflang="ar">Brands</a>
            <a href="" class="px-5 link-light" hreflang="ar">Seasonal</a>
            <a href="" class="px-5 link-light" hreflang="ar">Events </a>
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
            <div class="row" style={{ paddingLeft: '2%', paddingTop: '3%' }}>
              <div class="col-9" style={{ textAlign: 'left' }}>
                <h1 class="fs-4 text-black mb-0 " style={{ textAlign: 'left', paddingBottom: '1%' }}>
                  Item Categories
                </h1>
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-labeled btn-outline-dark" onClick={() => { sortCheapLast() }}> <span class="btn-label"><i class="bi bi-sort-down"></i></span> Highest First</button>
                <button type="button" class="btn btn-labeled btn-outline-dark" onClick={() => { sortCheapFirst() }} style={{marginLeft: '5%' }}> <span class="btn-label"><i class="bi bi-sort-up"></i></span> Lowest First</button>
              </div>
            </div>

            {/* tabs */}
            <div class="row" style={{ paddingLeft: '2%' }}> 



              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link link-dark" aria-current="page" href="#" onClick={() => { filterInventory("all") }}>All</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-5 link-dark" href="#" onClick={() => { filterInventory("Gluten") }}>Gluten Free</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-5 link-dark" href="#" onClick={() => { filterInventory("Dairy") }}>Dairy Free</a>
                </li>
              </ul>
            </div>

            {/* content cards */}
            <div class="row" style={{ paddingLeft: '2%', paddingTop: '2%' }}>
              <div class="card-group" style={{ display: 'flex', flexDirection: 'row' }}>
                {/* map bakeryData to BakeryItem components */}
                {iventoryItems.map((item, index) => (
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
              <ul class="nav nav-pills flex-column mb-auto" style={{ textAlign: 'left' }}>
                {cartItems.map((item, index) => (
                  <li class="nav-item">{item.name}
                    <button style={{ float: "right" }} onClick={() => { remove4rmCart(item.name) }}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </li>
                ))}
              </ul>
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


