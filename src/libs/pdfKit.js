import PDFDocument from "pdfkit-table";
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
  doc.fontSize(25).text('some text with an embedded font', 100, 100)

  doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');

  
  doc.end()
}

export function buildPDFTable(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  const tableArray = {
    headers: ['Country', 'Conversion rate', 'Thrend'],
    rows:[
      ['Switzerland', '12%', '+1.12%'],
      ['Frace', '2%', '+10.12%'],
      ['Spain', '1%', '+9.12%'],
    ]
  }
  doc.table(tableArray, {width:300})
  
  doc.end()
}