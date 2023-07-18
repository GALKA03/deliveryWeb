// import { createSlice } from "@reduxjs/toolkit";
// import cardReducer, { addPizza, reset, setQuantity } from "./cardSlice";

// describe("cardSlice", () => {
//   let initialState;

//   beforeEach(() => {
//     initialState = {
//       pizzas: [],
//       totalPizzas: 0,
//       quantity: 0,
//     };
//   });

//   it("should handle addPizza", () => {
//     const pizza = { id: 1, name: "Margherita", price: 10, quantity: 2 };
//     const action = addPizza(pizza);
//     const newState = cardReducer(initialState, action);

//     expect(newState.pizzas).toContainEqual(pizza);
//     expect(newState.quantity).toBe(2);
//     expect(newState.totalPizzas).toBe(20);
//   });

//   it("should handle reset", () => {
//     initialState = {
//       pizzas: [
//         { id: 1, name: "Margherita", price: 10, quantity: 2 },
//         { id: 2, name: "Pepperoni", price: 12, quantity: 1 },
//       ],
//       totalPizzas: 22,
//       quantity: 3,
//     };

//     const action = reset();
//     const newState = cardReducer(initialState, action);

//     expect(newState.pizzas).toEqual([]);
//     expect(newState.quantity).toBe(0);
//     expect(newState.totalPizzas).toBe(0);
//   });

//   it("should handle setQuantity", () => {
//     initialState = {
//       pizzas: [
//         { id: 1, name: "Margherita", price: 10, quantity: 2 },
//         { id: 2, name: "Pepperoni", price: 12, quantity: 1 },
//       ],
//       totalPizzas: 22,
//       quantity: 3,
//     };

//     const action = setQuantity({ id: 1, quantity: 5 });
//     const newState = cardReducer(initialState, action);

//     expect(newState.pizzas[0].quantity).toBe(5);
//   });
// });
