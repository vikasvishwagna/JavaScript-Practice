/**
Task: Create a Constructor Function for a Product

Define a constructor function named Product.
The constructor should accept the following parameters:
name (string)
price (number)
description (string)
category (string)
Inside the constructor, assign the provided values to the corresponding properties of the object being created.
Add a method to the Product prototype called displayInfo() that returns a string containing the product information in a user-friendly format. (e.g., "Product: [name], Price: [price], Category: [category]")
 */

function Product(name, price, description, category){
  this.name = name;
  this.price = price;
  this.description = description;
  this.category = category;

  Product.prototype.displayInfo = function (){
    return "Product: "+this.name+","+" Price: "+this.price+","+" Category: "+this.category;
  }
}

const product1 = new Product("Laptop", 1200, "Powerful laptop for work and gaming", "Electronics");
console.log(product1.displayInfo()); 

const product2 = new Product("T-Shirt", 25, "Comfortable cotton t-shirt", "Clothing");
console.log(product2.displayInfo());