import mongoose from "mongoose";

const { Schema } = mongoose;

  

  
  const UserSchema = new Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    //     role: {
    //   type: String, // Assuming the role is represented as a string
    //   required: true,
    //   default: "user", // Default role is "admin"
    // },
    role: {
      type: String,
      enum: ["user", "admin"], // Define the roles directly within the enum
      default: "user", // Default role is "user"
    },
    },
    { timestamps: true }
  );
let User;
try {
  User = mongoose.model("User");
} catch (error) {
  User=mongoose.model("User", UserSchema);
}
  
export default User;
