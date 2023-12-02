import PDFDocument from "pdfkit";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on('data', dataCallback)
  doc.on('end', endCallback)
  doc.fontSize(30).text('Hello name')

  doc.image(`${__dirname}/../files/iphone.jpg`, {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });

  doc.end()
}

