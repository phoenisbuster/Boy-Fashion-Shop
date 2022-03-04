import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../data';

const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        products: [],
        TotalItems: 0,
        TotalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let check = false;
            action.payload.id += action.payload.size + action.payload.color;
            state.products.forEach((c,index) => {
                if(c.id == action.payload.id)
                {
                    state.products[index].quantity += action.payload.quantity;
                    check = true;
                }
            })
            if(!check){
                state.products.push(action.payload);              
            }
            state.TotalItems += action.payload.quantity;
            state.TotalPrice += action.payload.price * action.payload.quantity;             
            console.log(action.payload);
            console.log(action.payload.quantity);
            console.log(action.payload.size);
            console.log(action.payload.color);
            console.log(action.payload.price);
        },
        addToCart1Unit: (state, action) => {
            let check = false;
            state.products.forEach((c,index) => {
                if(c.id == action.payload.id)
                {
                    state.products[index].quantity += 1;
                    check = true;
                }
            })
            if(!check){
                state.products.push(action.payload);
            }
            state.TotalItems += 1;
            state.TotalPrice += action.payload.price;
            console.log(action.payload);
            console.log(action.payload.quantity);
            console.log(action.payload.size);
            console.log(action.payload.color);
            console.log(action.payload.price);
        },
        addProduct: (state, action) => {
            if(state.TotalItems == 0){
                let cart =  {
                    id : action.payload.id,
                    quantity : 1,
                    title : action.payload.title,
                    price : action.payload.price,
                }
                state.products.push(cart);
                state.TotalPrice += state.products.price;
            }
            else{
                let check = false;
                state.products.forEach((c,index) => {
                    if(c.id == action.payload.id)
                    {
                        state.products[index].quantity += 1;
                        check = true;
                        state.TotalPrice += state.products[index].price;
                    }
                })
                if(!check){
                    let cart =  {
                        id : action.payload.id,
                        quantity : 1,
                        title : action.payload.title,
                        price : action.payload.price,
                    }
                    state.products.push(cart);
                    state.TotalPrice += state.products.price;
                }              
            }
            state.TotalItems += 1;
            //state.TotalPrice += action.payload.price * action.payload.quantity
        },
        removeProduct: (state, action) => {
            console.log(action.payload.id);
            let quantity = state.products.filter(c => c.id == action.payload.id)[0].quantity;
            console.log(quantity);
            if(quantity > 0){               
                state.TotalItems -= 1;
                state.products.forEach((c, index) => {
                    if(c.id == action.payload.id)
                    {
                        state.TotalPrice -= state.products[index].price;
                        if(state.products[index].quantity > 1) {
                            state.products[index].quantity -= 1;
                            
                        }
                        else {
                            state.products = state.products.filter(c => c.id != action.payload.id);
                            
                        }
                    }
                }) 
            }
        },
        clearCart: (state, action) => {
            state.products = [];
            state.TotalItems = 0;
            state.TotalPrice = 0;
        },
        ClearSpecificProduct: (state, action) => {
            console.log(action.payload.id);
            let quantity = state.products.filter(c => c.id == action.payload.id)[0].quantity;
            let money = state.products.filter(c => c.id == action.payload.id)[0].price;
            console.log(quantity);
            state.TotalItems -= quantity;
            state.TotalPrice -= quantity*money;
            state.products = state.products.filter(c => c.id != action.payload.id);
        }

    }
})

export const {addProduct, removeProduct, addToCart, addToCart1Unit, clearCart, ClearSpecificProduct} = cartSlice.actions
export default cartSlice.reducer