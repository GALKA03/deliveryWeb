import mongoose from "mongoose";

const { Schema } = mongoose;

   
  const AdminSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
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
