import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from 'axios'
import {useState, useEffect} from 'react'
const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Center = styled.div`
  padding: 50px;
  flex: 1;
  text-align: center;
`;

const Text = styled.h1`
  font-weight: bold;
`;

const Newarrival = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await axios.post("http://localhost:5000/api/products", {category: 'new'});
    console.log(res.data);
    setProducts(res.data);
  }, [])
  return (
    <Center>
      <Text>NEW ARRIVAL</Text>
    <Container>
      {
        /*popularProducts.map(c => (
          <Product item={c} key = {c.id}/>
        ))*/
      }
      {
        products.map(c => (
          <Product item={c} key = {c.id}/>
        ))
      }

    </Container>
    </Center>
    
  )
}

 const Products = ({cat, filter, sort}) => {
   const [products, setProducts] = useState([])
   const [filteredProducts, setFilteredProducts] = useState([])

   useEffect(() => {
     const getProducts = async () => {
       try {
         const res = await axios.post(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")
         setProducts(res.data)
       } catch(err){
          console.log(err)
       }
     }

     getProducts();
   }, [cat])

   useEffect(() => {
     cat && setFilteredProducts(products.filter(item => Object.entries(filter).every(([key, value]) => item[key].includes(value))))
   }, [products, cat, filter])

   useEffect(()=> {
     if(sort == "newest")
     {
       setFilteredProducts(prev => [...prev].sort((a, b) => a.CreatedAt - b.createdAt))
     } else if(sort == "asc")
     {
       setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
     }
     else 
     {
       setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
     }
   })

   return (
     <Container>
       {
         cat ? 
           filteredProducts.map((item) => <Product item={item} key={item.id} />) 
         :
           products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)
       }
     </Container>
   );
 };

export default Newarrival;