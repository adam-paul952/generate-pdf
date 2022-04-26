// in some service
const PdfTable = require("voilab-pdf-table");
const PdfDocument = require("pdfkit");
const fs = require("fs");
const ponies = fs.readFileSync("./nps_registered_ponies.json");
const { checkPonyStatus, assignPonySex } = require("./helpers");

const data = JSON.parse(ponies);

let sortedData = data.sort((a, b) => {
  return b.pony_nps_id_number - a.pony_nps_id_number;
});

module.exports = {
  create: function () {
    // create a PDF from PDFKit, and a table from PDFTable
    const pdf = new PdfDocument({
      //   margin: 0,
      //   autoFirstPage: false,
      margins: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    const table = new PdfTable(pdf, {
      bottomMargin: 10,
      fillColor: "#EFDEC7",
    });

    pdf.pipe(fs.createWriteStream("./pages/newCoverDocument.pdf"));

    //pdf.image("./pages/PDFmainCover.png", {
    // cover: [pdf.page.width, pdf.page.height - 50],
    //});

    pdf.image("./pages/cover-resized-1.png", {
      cover: [pdf.page.width, pdf.page.height],
    });

    // pdf.addPage().image("./pages/Intro.docx");

    table
      // add some plugins (here, a 'fit-to-width' for a column)
      .addPlugin(
        new (require("voilab-pdf-table/plugins/fitcolumn"))({
          column: [
            // "status",
            "name",
            "nps_id_#",
            // "DOB",
            // "sex",
            "sire_name",
            "sire_reg_#",
            "dam_name",
            "dam_reg_#",
          ],
        })
      )
      // set defaults to your columns
      .setColumnsDefaults({
        headerBorder: "B",
        align: "center",
        headerPadding: [5, 0, 0, 0],
        padding: [5, 0, 0, 0],
        border: "B",
      })
      // add table columns
      .addColumns([
        { header: "Status", id: "status", width: 45, align: "center" },
        { header: "Name", id: "name", width: 115, align: "center" },
        {
          header: "NPS#",
          id: "nps_id_#",
          width: 40,
          align: "center",
        },
        {
          header: "DOB",
          id: "DOB",
          width: 65,
          align: "center",
        },
        { header: "Sex", id: "sex", width: 30, align: "center" },
        { header: "Sire", id: "sire_name", width: 115, align: "center" },
        {
          header: "NPS#",
          id: "sire_reg_#",
          width: 40,
          align: "center",
        },
        { header: "Dam", id: "dam_name", width: 120, align: "center" },
        {
          header: "NPS#",
          id: "dam_reg_#",
          width: 40,
          align: "center",
        },
      ])
      // add events (here, we draw headers on each new page)
      .onPageAdded(function (tb) {
        tb.addHeader();
      });

    // // if no page already exists in your PDF, do not forget to add one
    // pdf.image("./pages/cover-resized-1.png", {
    //   cover: [pdf.page.width, pdf.page.height],
    // });

    // draw content, by passing data to the addBody method
    table.addBody(
      sortedData.map((pony) => {
        return {
          // id: pony.id_number,
          status: checkPonyStatus(pony.pony_status),
          name: pony.pony_name,
          "nps_id_#": pony.pony_nps_id_number,
          // registrar_name: pony.pony_registrar_name,
          DOB: pony.pony_date_of_birth,
          sex: assignPonySex(pony.pony_sex),
          sire_name: pony.sire_name,
          "sire_reg_#": pony.sire_nps_reg_number,
          // sire_registrar_name: pony.sire_registrar_name,
          dam_name: pony.dam_name,
          "dam_reg_#": pony.dam_nps_reg_number,
        };
      })
    );

    pdf.end();

    return pdf;
  },
};

/*
 *
 * solid beige background #eccebe
 */
