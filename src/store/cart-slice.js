import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart: (state, action) => {
            const body = action.payload;
            const existedItem = state.items.find(item => item.id === body.id);
            if (existedItem) {
                existedItem.total = existedItem.total + body.price;
                existedItem.quantity++;
            } else {
                state.items.push({
                    id: body.id,
                    title: body.title,
                    quantity: 1,
                    price: body.price,
                    total: body.price
                });
            }
            state.totalQuantity++;
        },
        removeItemFromCart: (state, action) => {
            const existedItem = state.items.find(item => item.id === action.payload);
            if(existedItem.quantity !== 1) {
                existedItem.total = existedItem.total - existedItem.price;
                existedItem.quantity--;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
            state.totalQuantity--;
        },
        initCart: (state, action) => {
            const body = action.payload;
            state.items = body.items;
            state.totalQuantity = body.totalQuantity;
        }
    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
