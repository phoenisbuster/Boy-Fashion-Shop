import styled from "styled-components";
import { Watches } from "../data";
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

const Watch = () => {
  return (
    <Center>
      <Text>WATCHES</Text>
    <Container>
      {Watches.map((item) => (
        <Product item={item} key = {item.id}/>
      ))}
    </Container>
    </Center>
  )
}
export default Watch;