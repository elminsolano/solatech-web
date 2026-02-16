const fs = require('fs');
const path = require('path');

async function extractFromPDF(pdfPath) {
  const PdfParser = require('pdf2json');
  return new Promise((resolve, reject) => {
    const pdfParser = new PdfParser();
    pdfParser.on('pdfParser_dataError', errData => reject(errData));
    pdfParser.on('pdfParser_dataReady', pdfData => {
      const text = pdfParser.getRawTextContent();
      resolve(text);
    });
    pdfParser.loadPDF(pdfPath);
  });
}

async function extractFromDOCX(docxPath) {
  const mammoth = require('mammoth');
  const result = await mammoth.extractRawText({ path: docxPath });
  return result.value;
}

async function main() {
  const infoDir = path.join(__dirname, '..', 'Solatech Info');
  
  const pdfFile = path.join(infoDir, 'Linea grafica', 'SOLATECH GROUP.pdf');
  const docxFile = path.join(infoDir, 'Info basica Solatech.docx');
  
  console.log('=== Extrayendo de PDF ===');
  try {
    const pdfText = await extractFromPDF(pdfFile);
    console.log(pdfText);
  } catch (e) {
    console.log('Error PDF:', e.message);
  }
  
  console.log('\n=== Extrayendo de DOCX ===');
  try {
    const docxText = await extractFromDOCX(docxFile);
    console.log(docxText);
  } catch (e) {
    console.log('Error DOCX:', e.message);
  }
}

main().catch(console.error);
