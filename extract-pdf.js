const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function extractImagesFromPDF() {
  const pdfPath = path.join(__dirname, '..', 'Solatech Info', 'Linea grafica', 'SOLATECH GROUP.pdf');
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  
  console.log('Number of pages:', pdfDoc.getPageCount());
  
  const imagesDir = path.join(__dirname, 'extracted-images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  let imageCount = 0;
  const pages = pdfDoc.getPages();
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const { x, y, width, height } = page.getMediaBox();
    console.log(`Page ${i + 1}: ${width} x ${height}`);
  }
  
  console.log('\n=== Attempting to extract images ===');
  const imageCount2 = pdfDoc.getImageCount();
  console.log('Number of embedded images:', imageCount2);
  
  for (let i = 0; i < imageCount2; i++) {
    try {
      const image = pdfDoc.getImage(i);
      console.log(`Image ${i}:`, image.constructor.name);
    } catch (e) {
      console.log(`Error getting image ${i}:`, e.message);
    }
  }
  
  console.log('\n=== Checking for color info in PDF ===');
  console.log('PDF loaded successfully. This PDF likely contains brand guidelines.');
  console.log('Please check the PDF visually for the color palette.');
}

extractImagesFromPDF().catch(console.error);
