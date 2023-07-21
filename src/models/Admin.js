import mongoose from "mongoose";

const { Schema } = mongoose;

 const AdminSchema = new Schema(
  {
    username: {
      type: String, // Specify the data type as String for the username field
      unique: true,
      required: true,
    },
    password: {
      type: String, // Specify the data type as String for the password field
      required: true,
     },
   role: {
      type: String, // Assuming the role is represented as a string
      required: true,
      default: "admin", // Default role is "admin"
    },
  },
  { timestamps: true }
);
let Admin;
try {
  Admin = mongoose.model("Admin");
} catch (error) {
  Admin=mongoose.model("Admin", AdminSchema);
}
  
export default Admin;
