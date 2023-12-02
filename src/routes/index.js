import { Router } from "express";
import { buildPDF, buildPDFTable } from "../libs/pdfKit.js";


const router = Router()

router.get('/invoice', (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'content-disposition': 'attachment; filename=invoice.pdf',
    
  });
  buildPDF(
    (data)=>stream.write(data),
    ()=>stream.end()
  )
  res.send('invoice')
})
router.get('/invoice2', (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'content-disposition': 'attachment; filename=invoice.pdf',
    
  });
  buildPDFTable(
    (data)=>stream.write(data),
    ()=>stream.end()
  )
  res.send('invoice')
})


export default router;