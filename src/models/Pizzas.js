import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PizzasSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: 60,
  },
 prices: {
    type: Number,
    default: 0,
    // required: [true, "Price is required"],
    // unique: true,
  },
  desc: {
    type: String,
    required: [true, "Description is required"],
    maxLength: 1000,
  },
  img: {
    type: String,
  },
   shop: {
    type: String, // Store the selected shop name here (e.g., "Pizzas," "Sushi," or "Wine")
  },
  public_id: {
    type: String, // Store the public_id from Cloudinary here
  }
},
{ timestamps: true }
);

let PizzasModel;

try {
  PizzasModel = mongoose.model("Pizzas");
} catch (error) {
  PizzasModel = mongoose.model("Pizzas", PizzasSchema);
}

export default PizzasModel;







