//console.log("Hello");

import { observable, autorun, action } from "mobx";

//cart is a observer
const cart = observable({
  itemCount: 0
});

//autorun is a observer and it will run every time there is a change in observable 
autorun(() => {
  console.log(`count ${cart.itemCount}`);
});

//to do any change in the observer we need to fire a action 
const incrementCount = action(() => {
  cart.itemCount++;
});

incrementCount();
 