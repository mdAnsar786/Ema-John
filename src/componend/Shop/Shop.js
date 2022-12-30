import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const[products,setProducts] = useState([]);
    const [cart,setcart] =useState([]);
    const[displayproduct,setDisplayProduct] =useState([]);

 useEffect( () => {
fetch('./products.JSON')
.then(res => res.json())
.then(data =>{
  setProducts(data);
  setDisplayProduct(data);
});


    },[])



    useEffect(() => {
        if (products.lenght) {
            const savedCart = getStoredCart();
            const StoredCart =[];
            for (const key in savedCart){
                console.log(key,savedCart[key])
                const addedproduct = products.find( product => product.key === key);
              if(addedproduct){
                const quantity = savedCart[key];
                addedproduct.quantity = quantity;
                console.log(addedproduct);
                StoredCart.push(addedproduct);  
              }
               
        }
       setcart(StoredCart);
         
        }
    }, [products])
    const handleAddToCart = (product) =>{
       const newCart =[...cart, product];
    setcart(newCart);
    // save to local storage (for now)
    addToDb(product.key);
    }
    const handleSearch = event =>{
 const  searchText = event.target.value;
 const matchedProducts = products.filter( product => product.name. 
  tolowerCase().includes(searchText.tolowerCase())).
  setDisplayProducts(matchedProducts);
  console.log(matchedProducts.length);
    }
    return (
<>
<div className="search-container">
< input
 type="text"
onChange={handleSearch}
 placeholder= "search product"/>
      </div>
        <div className="shop-container">
            <div className="product-container">
            
              {
              displayproduct.map(product => <Product 
               key={product.key}
               product={product}
               handleAddToCart={handleAddToCart}  
               >  
                </Product>)
              }
            </div>
            <div className="cart-container">
        <Cart cart={cart}></Cart>
            </div>
          
        </div>
</>
    );
};

export default Shop;