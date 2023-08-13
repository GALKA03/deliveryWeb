// pages/api/upload.js

// import { cloudinary } from "cloudinary"


export const POST = async (request) => {
  const body = await request.json();

  // Handle file upload to Cloudinary
  try {
    const file = request.files.get('file'); // Assuming you are sending the image file with the "file" field name
console.log('file', file)
    // Initialize Cloudinary with your API credentials
    // cloudinary.config({
    //   cloud_name: 'galyaaccount',
    //   api_key: process.env.API_KEY_CLOUD,
    //   api_secret: process.env.API_SECRET_CLOUD,
    // });

    const uploadResult = await cloudinary.uploader.upload(file, {
      upload_preset: 'uploads', // Specify the correct upload preset name here
    });
console.log('uploadRes', uploadResult)
    // Assuming SushiModel is a model for your MongoDB collection
    const newSushi = new SushiModel({
      ...body,
      imageUrl: uploadResult.secure_url, // Save the uploaded image URL in your MongoDB model
    });

    // Save the data in MongoDB

    await newSushi.save();

    return new NextResponse(newSushi, { status: 201, message: 'Sushi has been created' });
  } catch (err) {
    console.error('Error uploading image to Cloudinary:', error.message);
    return new NextResponse('Failed to upload image to Cloudinary', { status: 500 });
  }
};
