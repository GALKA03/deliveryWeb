import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./pizzas/cardSlice";

const store = configureStore({
  reducer: {
    pizzaCard: cardReducer
  }
});

export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import { createWrapper } from 'next-redux-wrapper';
// import cardReducer from './pizzas/cardSlice';

// const makeStore = () => {
//   const store = configureStore({
//     reducer: {
//       pizzaCard: cardReducer,
//     },
//   });

//   return store;
// };

// export const wrapper = createWrapper(makeStore);
