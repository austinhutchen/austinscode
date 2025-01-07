const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "public/fast_imgs");
const outputFile = path.join(__dirname, "public/assets-to-cache.json");

// Get all images in the directory
const images = fs.readdirSync(imageDir).map((file) => `/fast_imgs/${file}`);

// Write the asset list to a JSON file
fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));

console.log("Assets to Cache:", images);
