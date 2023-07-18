import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PizzasSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: 60,
  },
  price: {
    type: Number,
    default: 0,
    // required: [true, "Price is required"],
    // unique: true,
  },
 
  desc: {
    type: String,
    required: [true, "Description is required"],
    maxLength: 100,
  },
  img: {
    type: String,
  }

});
const Pizzas =
  mongoose.models && "Pizzas" in mongoose.models
    ? mongoose.models.Pizzas
    : mongoose.model("Pizzas", PizzasSchema);

export default Pizzas;
// const Pizzas = mongoose.models && "Product" in mongoose.models ? mongoose.models. Pizzas : mongoose.model("Pizzas", PizzasSchema);
// export default Pizzas;
// export default mongoose.models.Product || mongoose.model("Pizzas", PizzasSchema);
