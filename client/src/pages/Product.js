import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewSletter";
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { publicRequest } from '../requestMethods'
import axios from "axios";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import "./product.css";
import { lightBlue } from "@material-ui/core/colors";
const Container = styled.div`
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const TableImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0px;
`;
const OrdPrice = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: black;
  text-decoration-line: line-through;
  display: flex;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 80px;
  color: red;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
`;
const Note = styled.span`
  font-size = 40px;
  color : red;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 200;

`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover{
      background-color: #f8f4f4;
  }
`;
const Description = styled.section`
  border-style: solid;
  border-bottom-color: black;
  background: white;
`;


const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch()

  useEffect(async () => {
    const res = await publicRequest.get(`http://localhost:5000/api/products/${id}`);
    console.log(res);
    setProduct(res.data);
    setColor(res.data.color[0]);
    setSize(res.data.size[0]);
  }, [id])

  const handleQuantity = (flag) => {
    if(flag)
      setQuantity(quantity + 1)
    else
      quantity > 1 && setQuantity(quantity - 1)
  }

  const handleClick = () => {
    dispatch(addToCart({...product, quantity, color, size}))
	  console.log(`Product added ${product.title} with quantity ${quantity}`)
  }

    return (
      product ? (
      <Container>
        <Wrapper>
          <div class='quodrant'>
          <div class='qtop'>
              <div class='quodrant1'>
                <ImgContainer>
                  <div class="container">
                        <img src={product.img}/>
                  </div>
                </ImgContainer>
              </div>
              <div class='quodrant2'>
                <InfoContainer>
                <Title>{product.title}</Title>
                {/* <Desc>
                  {product.desc}
                </Desc> */}
                {/* <OrdPrice>$ {product.Ordprice * quantity}</OrdPrice> */}
                <Price>${product.price * quantity}</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color: </FilterTitle>
              <FilterSize onChange={(e) => setColor(e.target.value)}>
                    {
                      product.color?.map(c => (
                        <FilterOption key={c}>{c}</FilterOption>
                      ))
                    }
              </FilterSize>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size: </FilterTitle>
                    <FilterSize onChange={(e) => setSize(e.target.value)}>
                      {
                        product.size?.map(s => (
                          <FilterOption key={s}>{s}</FilterOption>
                        ))
                      }              
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
              <Desc>Quantity </Desc>
                    <Remove onClick={() => handleQuantity(0)}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={() => handleQuantity(1)}/>
                  </AmountContainer>
                  <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
                <Description style={{padding: '5px',  marginTop: '30px'}}>
                    {
                      product.des && product.des.map(c => <li>{c}</li>)
                    }
                </Description>
              </InfoContainer>
              </div>
      </div>
      <div class='qbottom'>
          <div class='quodrant3'>
            <ImgContainer>
              <TableImage src={'https://uniqlo.scene7.com/is/image/UNIQLO/us2_graph_bodysize_uq_w'} />
            </ImgContainer>
          </div>
          <div class='quodrant4'>
            <ImgContainer>
              <TableImage src={'http://uniqlo.scene7.com/is/image/UNIQLO/us2_graph_bodysize_uq_m'} />
            </ImgContainer>
          </div>
      </div>
      </div> 
        </Wrapper>
      </Container>) : <h1 style={{textAlign: 'center', marginTop: '10px'}}>NO PAGE</h1>
  );
};

export default Product;

