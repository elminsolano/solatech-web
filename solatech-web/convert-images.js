const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const logosDir = path.join(__dirname, 'public', 'logos');
const outputDir = path.join(__dirname, 'public', 'logos');

async function convertToWebP() {
  const files = fs.readdirSync(logosDir).filter(f => f.endsWith('.png'));
  
  console.log('Convirtiendo logos a WebP...\n');
  
  for (const file of files) {
    const inputPath = path.join(logosDir, file);
    const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${file} → ${file.replace('.png', '.webp')} (ahorro: ${savings}%)`);
  }
  
  console.log('\n¡Conversión completada!');
}

convertToWebP().catch(console.error);
