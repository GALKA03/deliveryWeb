import mongoose from "mongoose";

const { Schema } = mongoose;

const OdersSchema = new Schema({
  customer: {
    type: String,
    required: [true, "Name is required"],
  },
  phone: {
    type: Number,
    required: [true, "Number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  total: {
    type: Number,
    required: [true, "Total is required"],
  },
  status: {
    type: Number,
    default: 0,
  },
  details: {
    type: String,
  },
  method: {
    type: Number,
  },
});

const OdersModel =
  mongoose.models.Oders || mongoose.model("Oders", OdersSchema);

export default OdersModel;


