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
    shop: {
        type: String, // Store the selected shop name here (e.g., "Pizzas," "Sushi," or "Wine")
    },
    public_id: {
        type: String, // Store the public_id from Cloudinary here
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







