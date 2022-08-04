/**
 * @file abbreviationPage.js
 * @description This page displays the abbreviations used throughout the document in the columns
 * @module abbreviationPage.js
 */

const abbreviationPage = [
  {
    text: "Abbreviations used in the Herdbook entries:\n\n\n\n",
    fontSize: 12,
    margin: [70, 792 / 3.5, 70, 0],
  },
  {
    columns: [
      { text: "Status:", width: "20%" },
      "L = Live, D = Deceased, UNK = Unknown",
    ],
    fontSize: 12,
    margin: [70, 0, 70, 0],
  },
  { text: "\n" },
  {
    columns: [
      { text: "NPS#:", width: "20%" },
      "PQ2, PQ3, etc. = Unregistered Pony whose parentage qualifies them for registration but are unregistered as of the date of publication",
    ],
    fontSize: 12,
    margin: [70, 0, 70, 0],
  },
  { text: "\n" },
  {
    columns: [
      { text: "Sex:", width: "20%" },
      "S = Stallion, C = Colt (ungelded male pony under 4 years), Gelding = gelded male pony, M = Mare, F = Filly (female pony under 4 years)",
    ],
    fontSize: 12,
    margin: [70, 0, 70, 0],
  },
  { text: "\n" },
  {
    columns: [
      { text: "Location:", width: "20%" },
      "NL, ME, etc. = Two-Letter Abbreviation for Province or State, UNC = Uncertain",
    ],
    pageBreak: "after",
    fontSize: 12,
    margin: [70, 0, 70, 0],
  },
];

exports.abbreviationPage = abbreviationPage;
