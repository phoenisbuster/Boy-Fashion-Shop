import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import {useState, useEffect} from 'react'
import { addProduct, removeProduct, clearCart, ClearSpecificProduct } from '../slices/cartSlice'
import {useDispatch} from 'react-redux'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const RemovieItemButton = styled.button`
  padding: 5px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  width: 250px
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 3;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RemovieItem = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;    
  border-radius:50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: rightContext;
  justify-content: center;
  padding: 50px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  display: flex;
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 25px;
  padding: 50px;
  height: max-content;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const BackShopping = styled(Link)`
  font-weight: bold
`;

const Cart = () => {
  const callDispatch = useDispatch();
  const cart = useSelector(state => state.cart)

  const truncate = (str) => {
		return str.substr(str.length - 10, str.length);
	};

  const handleClick = (flag, product) => {
    if(flag == 1){
      callDispatch(addProduct(product));
    }
    else{
      callDispatch(removeProduct(product));
    }
  }
  const handleClick1 = (product) => {
      callDispatch(ClearSpecificProduct(product));
  }
  const ClearCartFunc = (product) => {
    callDispatch(clearCart(product));
  }
  if(cart.TotalItems == 0){
    return(
      <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <BackShopping to='/'><TopButton>CONTINUE SHOPPING</TopButton></BackShopping>
          <TopTexts>
            <TopText>Shopping Bag({cart.TotalItems})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
            
            <b>YOUR CART IS CURRENTLY EMPTY, PLEASE DO NOT LEAVE WITHOUT BUYING ANYTHING :((</b>
            
        </Bottom>
      </Wrapper>
    </Container>
    )
  }
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <BackShopping to='/'><TopButton>CONTINUE SHOPPING</TopButton></BackShopping>
          <TopTexts>
            <TopText>Shopping Bag({cart.TotalItems})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
            <Info>
            {
              cart.products.map(product => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product name:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>Product code:</b> {truncate(product.id)}
                      </ProductId>
                      <ProductColor color={product.color}/>
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                      <RemovieItemButton onClick={() => handleClick1(product)}><ProductName>Remove this item</ProductName></RemovieItemButton>   
                    </Details>                                 
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                    <TopButton onClick={() => handleClick(1, product)}><Add/></TopButton> 
                      <ProductAmount>{product.quantity}</ProductAmount>
                    <TopButton onClick={() => handleClick(0, product)}><Remove/></TopButton> 
                    </ProductAmountContainer>
                    <ProductPrice>${product.price * product.quantity}</ProductPrice>
                  </PriceDetail>                  
                </Product>
              ))
            }
            <Button onClick={() => ClearCartFunc(cart.product)}>CLEAR CART</Button>
            </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total Items</SummaryItemText>
              <SummaryItemPrice>{cart.TotalItems}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.TotalPrice}</SummaryItemPrice> 
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.TotalPrice}</SummaryItemPrice> 
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
		  </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;