import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {signOut} from '../slices/userSlice'
import { useHistory } from 'react-router-dom';
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const BackHome = styled(Link)`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const MenuName = styled(Link)`
  font-size: 17px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  margin-left: 25px;
`;

const Navbar = () => {
  const user = useSelector(state => state.user.currentUser)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(signOut())
    history.push('/login')
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <BackHome to='/'><Logo>BK SHOP</Logo></BackHome>
        </Center>
        <Right>
          {
            user && <MenuName to='#'>Hi, {user.username}!</MenuName>
          }
          <MenuItem to='/register'>REGISTER</MenuItem>
          {
            user ?  <MenuItem to='#' onClick={handleClick}>LOG OUT</MenuItem> : <MenuItem to='/login'>SIGN IN</MenuItem>
          }
          <MenuItem to='/cart'>
            <Badge badgeContent={cart.TotalItems} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;