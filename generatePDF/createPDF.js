const PDFDocument = require("pdfkit");

const fs = require("fs");

const createPDF = (pony) => {
  const doc = new PDFDocument({ size: "A4", margin: 0 });

  doc.pipe(fs.createWriteStream("example.pdf"));

  doc.image("./pages/PDFmainCover.png", {
    cover: [doc.page.width, doc.page.height],
  });

  doc.addPage();

  pony.forEach((item) => {
    doc.moveDown(3);
    doc.fontSize(27).text(item.pony_name, 10, 10);
  });

  doc.addPage();

  doc.addPage();

  //   doc
  //     .addPage()
  //     .text("Hello World!")
  //     .image("./pages/pdfMainBG.jpeg", {
  //       cover: [doc.page.width, doc.page.height],
  //     });

  //   doc.addPage().fontSize(15).text("Hello World!", 100, 100);

  doc.end();

  console.log("PDF Created");
};

module.exports = createPDF;
