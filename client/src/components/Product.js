import {
    FavoriteBorderOutlined,
    Flag,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from 'react-router-dom'
  import { Add, Remove } from "@material-ui/icons";

  import {useState, useEffect} from 'react'
  import { addToCart1Unit } from "../slices/cartSlice";
  import { useDispatch } from "react-redux";
  import { addToCart } from "../slices/cartSlice";
  import { useHistory } from 'react-router-dom';

  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cacfcb;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    z-index: 999; 
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

  const Itemdiv = styled.div`
  flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cacfcb;
    position: relative;
  `;
  const ItemInfo = styled.h2`
    position: left;
  `;
  const Itemdetail = styled.h6`
    text-align: justify;
  `;

  const PopBackground = styled.div`
  width:64%;
  height:90%;
  position: fixed;
  top:5%;
  left: 18%;
  transform: translate (-50%,50%);
  background: white;
  z-index: 4;
`;

const PopCloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px; 
  width:32px;
  height:32px;
  padding: 0;
  z-index: 5;
`;

const PopImg = styled.img`
  display: block;
  border: 1px solid #ddd;
  width:99%;
  height:95%;
  z-index: 4;
`;

const Popleft = styled.div`
    width:30%;
    height:80%;
    position: fixed;
    top:10%;
    left:20%;
    transform: translate (-50%,50%);
    background: white;
    z-index: 4;
`;
const Popright = styled.div`
    width:30%;
    height:80%;
    position: fixed;
    top:10%;
    right: 20%;
    transform: translate (-50%,50%);
    background: white;
    z-index: 4;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  color: black;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 5px;
`;

const Desc = styled.p`
  font-size: normal;
  font-weight: 200;
  justify-content: left;
  width:60%;
  font-size: 20px;
  margin: 80px -32px;
  margin-right:20px;
`;

const Bran = styled.p`
  text-color:slateblue;
`;

const Quan = styled.p`
  font-size: normal;
  font-weight: 200;
  justify-content: left;
  width:60%;
  font-size: 20px;
  margin: 60px -5px;
  margin-right:20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #BBC4C2;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin-bottom:50px;
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
  font-size: normal;
  font-weight: 200;

`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`

  margin-right: 40px;
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
  border: 1px solid #BBC4C2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #BBC4C2;
  background-color: #BBC4C2;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-left:20px;

  &:hover{
      background-color: #f8f4f4;
  }
`;


const Left =({data})=>{
  return(
    <Popleft>
        <PopImg src={data.img}/>
    </Popleft>
  )
}



const Right =({data})=>{

  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState(data.color[0]);
  const [size, setSize] = useState(data.size[0]);
  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    id: data._id,
    img: data.img,
    title: data.title,
    desc: data.des,
    price: data.price,
  })

  const handleQuantity = (flag) => {
    if(flag)
      setQuantity(quantity + 1)
    else
      quantity > 1 && setQuantity(quantity - 1)
  }

  const handleClick = () => {
    dispatch(addToCart({...product, quantity, color, size}))
	console.log(`Product added ${data.title} has color ${color} and size ${size} with quantity ${quantity}`)
  }

  return(
    <Popright>
      <InfoContainer>
        <Title>{data.title}</Title>
        <Price>$ {data.price * quantity}</Price>
        <Desc>
            Brand: <bran>BK SHOP</bran>
        </Desc>
        <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
			  <FilterSize onChange={(e) => setColor(e.target.value)}>
              {
                data.color?.map(c => (
                  <FilterOption key={c}>{c}</FilterOption>
                ))
              }
			  </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {
                  data.size?.map(s => (
                    <FilterOption key={s}>{s}</FilterOption>
                  ))
                }              
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
			  <Quan>Quantity: </Quan>
              <Remove onClick={() => handleQuantity(0)}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity(1)}/>
            </AmountContainer>
            <Button onClick={handleClick}> <b>ADD TO CART</b></Button>
          </AddContainer>

          
      </InfoContainer>


    </Popright>
  )
}

const Product = ({ item }) => {
  const [color, setColor] = useState(item.color[0]);
  const [size, setSize] = useState(item.size[0]);
  const dispatch = useDispatch()
  const history = useHistory();
  const [flag, setFlag] = useState(false);

  const [product, setProduct] = useState({
    id: item._id + size + color,
    img: item.img,
    title: item.title,
    desc: item.des,
    price: item.price,
	  size: size,
    color: color,
    quantity: 1
  })
  
  const handleClick = () => {
    console.log(color)
    console.log(size)
    dispatch(addToCart1Unit({...product}))
	console.log(`Product added ${product.title} with quantity ${1}`)
  }

  const hanldeView = () => {
    window.scrollTo(0, 0);
    history.push(`/product/${item._id}`)
  }

    return (
      <Container>
        <Circle/>
        <Image src={item.img} />        
        <Info>
          <Icon>
            <ShoppingCartOutlined onClick={handleClick}/>
          </Icon>
          <Icon onClick = {()=> setFlag(!flag)} >
    
              <SearchOutlined />
            
          </Icon>
          <Icon onClick={hanldeView}>
            <FavoriteBorderOutlined />
          </Icon>
        </Info> 
        {flag && (
          <PopBackground>
            <PopCloseButton onClick={()=> setFlag(!Flag)}>X</PopCloseButton>
            <Left data={item}>

            </Left>
            <Right data={item}>

            </Right>
            
          </PopBackground>
        ) }
      </Container>
    );
};
  
  export default Product;