import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  pizzas: [],
    totalPizzas: 0,
  quantity:0,
};

const cardSlice = createSlice({
  name: "pizzaCard",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.pizzas.push(action.payload);
      // state.quantity += 1;
      // state.totalPizzas += action.payload.price * action.payload.quantity
      state.quantity += Number(action.payload.quantity);
      state.totalPizzas += action.payload.price * Number(action.payload.quantity)
    },
    reset: (state) => {
      state.quantity = 0;
      state.pizzas = [];
      state.totalPizzas = 0
      
    },
    setQuantity: (state, action) => {
  const pizzaIndex = state.pizzas.findIndex(pizza => pizza.id === action.payload.id);
  if (pizzaIndex > -1) {
    state.pizzas[pizzaIndex].quantity = action.payload.quantity;
  }
}
  }
});
export const{addPizza, reset, setQuantity}= cardSlice.actions
export default cardSlice.reducer;