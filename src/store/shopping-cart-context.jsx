// In this file, we'll be managing React Context value 

import { createContext } from "react";

//start with upperText 
//createContext has a jS obeject that contains a React Component

//just like useState, the argument will be the initial value, it can be any value 
//here we'll go for an object 
export const CartContext = createContext({
    items: []
});