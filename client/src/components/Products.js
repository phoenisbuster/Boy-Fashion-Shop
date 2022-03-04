import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Filter1 } from "@material-ui/icons";
import { publicRequest } from '../requestMethods'
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

const Div = styled.div`
color: red;
`





const BestSeller = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await publicRequest.post("http://localhost:5000/api/products", {category: 'hot'});
    console.log(res.data);
    setProducts(res.data);
  }, [])

  return (
    <Center>
      <Text>BEST SELLER</Text>
    <Container>
      {/* {popularProducts.map((item) => (
        <Product item={item} key = {item.id}/>
      ))} */}
      {
        products.map(c => (
          <Product item={c} key = {c.id}/>
        ))
      }


    </Container>

    </Center>
    
  )
}

export const Products = (props) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const cat = props.cat;
  const filter = props.filter;
  const sort = props.sort;

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log({category: cat, ...filter})
        const res = await publicRequest.post(`/products`, {category: cat, ...filter});
  
        setProducts(res.data)
      } catch(err){
      }
    }

    getProducts();
  }, [cat, filter])

  // useEffect(() => {
  //   cat && setFilteredProducts(products.filter(item => Object.entries(filter).every(([key, value]) => item[key].includes(value))))
  // }, [cat, filter])

  // useEffect(()=> {
  //   if(sort == "newest")
  //   {
  //     setFilteredProducts(prev => [...prev].sort((a, b) => a.CreatedAt - b.createdAt))
  //   } else if(sort == "asc")
  //   {
  //     setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
  //   }
  //   else 
  //   {
  //     setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
  //   }
  // }, [sort])

  return (
    <Container>
      {
        cat &&
        products.map((item) => <Product item={item} key={item.id} />) 
      }
    </Container>
  );
};

export default BestSeller;