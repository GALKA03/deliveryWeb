import { v2 as cloudinary } from "cloudinary"
cloudinary.config({
    cloud_name: "galyaaccount",
    api_key: process.env.API_KEY.CLOUD,
    api_secret: process.env.API_SECRET_CLOUD
 })