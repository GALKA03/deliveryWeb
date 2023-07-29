import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SushiSchema = new Schema({
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

let SushiModel;

try {
  SushiModel = mongoose.model("Sushi");
} catch (error) {
  SushiModel = mongoose.model("Sushi",SushiSchema);
}

export default SushiModel;







