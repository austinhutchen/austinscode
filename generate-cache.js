const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "public/fast_imgs");
const buildCssDir = path.join(__dirname, "build/static/css"); // React build CSS path
const outputFile = path.join(__dirname, "public/assets-to-cache.json");

function getFilesFromDir(directory, basePath) {
  return fs.existsSync(directory)
    ? fs.readdirSync(directory).map((file) => `/${basePath}/${file}`)
    : [];
}

// Get images and CSS from the React build
const images = getFilesFromDir(imageDir, "fast_imgs");
const cssFiles = getFilesFromDir(buildCssDir, "static/css");

const assetsToCache = [...images, ...cssFiles];

// Write the asset list to a JSON file
fs.writeFileSync(outputFile, JSON.stringify(assetsToCache, null, 2));

console.log("Assets to Cache:", assetsToCache);
