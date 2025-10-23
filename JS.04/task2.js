// Example data
const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Headphones", price: 150, category: "Electronics" },
    { id: 3, name: "Shoes", price: 90, category: "Fashion" },
    { id: 4, name: "T-shirt", price: 25, category: "Fashion" }
  ];
  
  // 1. Create an empty array called 'cart'
  const cart = []
  // 2. Create a function addToCart(productId, quantity)
  //    that adds the selected product to the cart with its quantity and total price
  
 addToCart = (productId, quantity)=>{
       let pr = products.find(p => p.id === productId)
        cart.push({
            id:pr.id,
            name:pr.name,
            price:pr.price,
            category:pr.category,
            quantity:quantity,
        })
        
  }




  // 3. Create a function removeFromCart(productId)
  //    that removes a product from the cart by its id

  removeFromCart = (productId)=>{
    let pr = cart.find(p=> p.id === productId)
    cart.splice(pr.id-1,1)
      
}


  // 4. Create a function getCartTotal()
  //    that returns the total price of all items in the cart
  
  getCartTotal= ()=>{
    let number = cart.map(t => t.price)
    let totalnumb = 0;
    for (let i = 0; i < number.length; i++) {
        totalnumb+=number[i]   
    }
    console.log(totalnumb);
    
  }



  // 5. Create a function filterByCategory(category)
  //    that returns all products that belong to the given category

  filterByCategory = (category) => {
    let filtercategory = products.filter(c=> c.category === category)
    console.log(filtercategory);
    
  }

  // 6. Create a function searchProduct(keyword)
  //    that returns all products whose names include the given keyword (case-insensitive)
  
  
  searchProduct = (keyword) => {
  let product = products.filter(n => n.name === keyword)
  console.log(product);
      
  }


  // 7. Add a few items to the cart using your functions

    addToCart(1,34)
    addToCart(2,34)

  // 8. Remove one item from the cart

  removeFromCart(1) 
  // 9. Log the cart contents

  console.log(cart);
  
  // 10. Log the total cart price
  getCartTotal()
  
  // 11. Log products filtered by category
  filterByCategory("Fashion")

  // 12. Log the result of a product search
  searchProduct("Laptop")