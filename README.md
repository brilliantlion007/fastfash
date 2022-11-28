# Development

### Link to Deployed Website
https://brilliantlion007.github.io/fastfash/

### Goal and Value of the Application
A web store for buying pastries and bakery goodies.

### Usability Principles Considered
My application provides two filtering categories to cater for buyers that are allergic to Gluten and Diary products.
My application also provides a way to sort through displayed products by price. You can see the pricer options first or the cheaper options first
This sorting works with filtering as well, so you can filter to see products containing gluten then sort by price.
My application also provided a dynamic cart that visually populates as you add items and accumulates the total price. There is also an intuitive remove button beside each item, which deletes an item from your cart and deducts its contribution to your total price.
Finally there is an All filter which acts as a reset button, allowing you to see all items in the inventory.

### Organization of Components
I implemented a FoodItem component to represent each food item. This component provided a view of all the various specifications of a product and provided a button to add that item to an aggregator. I used this component to dynamically generate items in the App.js based on a json file containing an array of each food item.

### How Data is Passed Down Through Components
In the main App.js file, my application loads in an maps an array of fooditems in a json inventory file to create new instances of my fooditem component. Data from each entry in the json file is passed into the constructor for the FoodItem component, which uses the passed data to populate various display fields.

### How the User Triggers State Changes
My application tracks the state of two elements, an array of cart items and an array of the inventory.
State changes on the inventory are triggered by selecting different tabs that act as filters for displaying specific kinds of food items.
State changes on the cart items are triggered by adding and removing food items to the cart, aditionally incrementing an aggregator of each item price.
