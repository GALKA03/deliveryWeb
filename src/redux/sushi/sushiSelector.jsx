import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  sushi: [],
  total: 0,
  quantity: 0,
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
      state.total += action.payload.prices * Number(action.payload.quantity);
    },
    deletePizza: (state, action) => {
      const pizzaIndex = state.pizzas.findIndex(
        (pizza) => pizza._id === action.payload._id
      );
      if (pizzaIndex > -1) {
        const deletedPizza = state.pizzas.splice(pizzaIndex, 1);
        state.quantity -= Number(deletedPizza[0].quantity);
        state.total -=
          deletedPizza[0].prices * Number(deletedPizza[0].quantity);
      }
    },
  },
  updatePizza: (state, action) => {
    const { id, quantity } = action.payload;
    const pizzaToUpdate = state.pizzas.find((pizza) => pizza.id === id);
    if (pizzaToUpdate) {
      state.total -= pizzaToUpdate.prices * Number(pizzaToUpdate.quantity);
      state.total += pizzaToUpdate.prices * Number(quantity);
      pizzaToUpdate.quantity = quantity;
      state.quantity = state.pizzas.reduce(
        (totalQuantity, pizza) => totalQuantity + Number(pizza.quantity),
        0
      );
    }
  },
  addSushi: (state, action) => {
    state.sushi.push(action.payload);
    state.quantity += Number(action.payload.quantity);
    state.total += action.payload.prices * Number(action.payload.quantity);
  },
  deleteSushi: (state, action) => {
    const sushiIndex = state.sushi.findIndex(
      (sushi) => sushi._id === action.payload._id
    );
    if (sushiIndex > -1) {
      const deletedSushi = state.sushi.splice(sushiIndex, 1);
      state.quantity -= Number(deletedSushi[0].quantity);
      state.total -= deletedSushi[0].prices * Number(deletedSushi[0].quantity);
    }
  },
  updateSushi: (state, action) => {
    const { id, quantity } = action.payload;
    const sushiToUpdate = state.sushi.find((sushi) => sushi.id === id);
    if (sushiToUpdate) {
      state.total -= sushiToUpdate.prices * Number(sushiToUpdate.quantity);
      state.total += sushiToUpdate.prices * Number(quantity);
      sushiToUpdate.quantity = quantity;
      state.quantity = state.sushi.reduce(
        (totalQuantity, sushi) => totalQuantity + Number(sushi.quantity),
        0
      );
    }
  },
  reset: (state) => {
    state.quantity = 0;
    state.pizzas = [];
    state.totalPizzas = 0;
  },
  setQuantity: (state, action) => {
    const pizzaIndex = state.pizzas.findIndex(
      (pizza) => pizza.id === action.payload.id
    );
    if (pizzaIndex > -1) {
      state.pizzas[pizzaIndex].quantity = action.payload.quantity;
    }
  },
});
export const {
  addPizza,
  reset,
  setQuantity,
  deletePizza,
  addSushi,
  deleteSushi,
  updateSushi,
  updatePizza,
} = cardSlice.actions;
export default cardSlice.reducer;
