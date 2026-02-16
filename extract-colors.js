const getPixels = require('get-pixels');
const path = require('path');

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

const imagePath = path.join(__dirname, '..', 'Solatech Info', 'Paleta de colores.png');

getPixels(imagePath, function(err, pixels) {
  if (err) {
    console.log("Error loading image", err);
    return;
  }
  
  const data = pixels.data;
  const width = pixels.shape[0];
  const height = pixels.shape[1];
  
  console.log('Image size:', width, 'x', height);
  
  const colors = new Map();
  
  for (let y = 0; y < height; y += 5) {
    for (let x = 0; x < width; x += 5) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      
      if (a > 128) {
        const key = `${Math.round(r/20)*20},${Math.round(g/20)*20},${Math.round(b/20)*20}`;
        if (!colors.has(key)) {
          colors.set(key, { r, g, b, count: 0 });
        }
        colors.get(key).count++;
      }
    }
  }
  
  const sortedColors = [...colors.values()].sort((a, b) => b.count - a.count);
  
  console.log('\n=== Top Colors (RGB & HEX) ===');
  sortedColors.slice(0, 15).forEach((c, i) => {
    console.log(`${i + 1}. RGB(${c.r}, ${c.g}, ${c.b}) = ${rgbToHex(c.r, c.g, c.b)}`);
  });
});
