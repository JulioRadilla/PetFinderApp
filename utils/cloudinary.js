require('dotenv').config({ path: './config/.env' });

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log(cloudinary.config().cloud_name)
console.log(cloudinary.config().api_key)
console.log(cloudinary.config().api_secret)
module.exports = cloudinary;
