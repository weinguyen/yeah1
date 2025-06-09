const fs = require("fs");
const path = require("path");
const sharp = require("sharp");


const inputDir = "./bao/9";

fs.readdirSync(inputDir).forEach(file => {
    if (file.endsWith(".png")) {
        const inputPath = path.join(inputDir, file);

        const outputPath = inputPath.replace(/\.png$/, ".webp");

        sharp(inputPath)
            .toFormat("webp")
            .toFile(outputPath)
            .then(() => {
                console.log(`Đã chuyển: ${file} -> ${path.basename(outputPath)}`);

            });
    }

    if (file.endsWith(".jpg")) {
        const inputPath = path.join(inputDir, file);

        const outputPath = inputPath.replace(/\.jpg$/, ".webp");

        sharp(inputPath)
            .toFormat("webp")
            .toFile(outputPath)
            .then(() => {
                console.log(`Đã chuyển: ${file} -> ${path.basename(outputPath)}`);

            });
    }
});
