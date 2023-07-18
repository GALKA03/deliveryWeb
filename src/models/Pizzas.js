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
  extraOptions: {
    type: [{
      text: { type: String, default: "standart", },
      price:{type:Number, default: 0,},
    },

    ]
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










// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const PizzasSchema = new Schema({
//   title: {
//     type: String,
//     required: [true, "Title is required"],
//     maxLength: 60,
//   },
//   price: {
//     type: Number,
//     default: 0,
//     // required: [true, "Price is required"],
//     // unique: true,
//   },
 
//   desc: {
//     type: String,
//     required: [true, "Description is required"],
//     maxLength: 100,
//   },
//   img: {
//     type: String,
//   }

// });
// const PizzasModel =
//   mongoose.models.Pizzas || mongoose.model("Pizzas", PizzasSchema);

// export default PizzasModel;
// // const Pizzas = mongoose.models && "Product" in mongoose.models ? mongoose.models. Pizzas : mongoose.model("Pizzas", PizzasSchema);
// // export default Pizzas;
// // export default mongoose.models.Product || mongoose.model("Pizzas", PizzasSchema);
