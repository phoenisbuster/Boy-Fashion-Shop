import styled from "styled-components";
import Navbar from "../components/Navbar";
import {Products} from "../components/Products";
import Newsletter from "../components/NewSletter";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 45px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const [products, setProducts] = useState([]);
  const cat = location.pathname.split('/')[2];
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({...filter, 
      [e.target.name]: value
    })
  }

  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option selected value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
    </Container>
  );
};

export default ProductList;