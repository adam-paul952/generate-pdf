/**
 * @file introduction.js
 * @description The preliminary page used after the cover page - Will be removed in future documents
 * @typedef { Object } introductionPage
 * @property { Array } margin [Left, Top, Right, Bottom]
 * @property { string } background Background color of page
 * @property { Array } stack Array of objects, representing stacks of paragraphs
 * @property { string } pageBreak String holding when pageBreak should be applied
 * @property { number } fontSize Global font size of document
 * @module introductionPage.js
 */

const introductionPage = {
  columns: [
    {
      // alignment: "justify",
      //       l   T   R  B
      margin: [67, 0, 67, 0],
      background: "#EFDEC7",
      stack: [
        {
          text: "\n\n\nIntroduction to the Newfoundland Pony Society Annual Herdbook 2021",
          style: "header",
        },
        { text: "[Preliminary]\n\n", style: "header" },
        {
          text: [
            "This is the first Annual Herdbook of Registered Newfoundland Ponies and is published",
            " by The Newfoundland Pony Society to be a permanent record of the state of the",
            " Newfoundland Pony Breed as of the end of a given year and is intended to be published ",
            "in the first quarter of the following year. We consider the “herd” to include all Registered ",
            "Ponies, regardless of location.\n\n",
          ],
        },
        {
          text: [
            "The Herdbook is mandated by the recently established Registrar’s Manual [found on ",
            "this website] and includes all ponies registered to December 31, 2021 ending with ",
            "Registration Number 952.\n\n",
          ],
        },
        {
          text: [
            "It is compiled from the most recent Lineage Report with the addition of information ",
            "from The Newfoundland Pony Society records. The newest features include the last ",
            "known location of each pony by Province or State as of December 31, 2021 ",
            "and virtual access to a photograph of the pony as available in cooperation with the ",
            "owner or former owner. Ancestry Family Trees are accessible directly from the Herdbook by ",
            "clicking on the pony's name and Descendant tables can be accessed from the Lineage Report ",
            "on the website.\n\n",
          ],
        },
        {
          text: [
            "We believe that the Herdbook will become an important tool in pursuit of the Society's ",
            "mandate to Promote, Preserve, and Protect the Newfoundland Pony. It will provide a ",
            "point-in-time compendium of information on the state of the breed and aid in research. ",
            "It will also provide support and information for breeders and individual owners ",
            "seeking to breed their pony and be of interest to horse and pony lovers everywhere, ",
            "particularly Newfoundland Pony lovers.\n\n",
          ],
        },
        {
          text: [
            "We are aware that there are ponies eligible for registration that are not yet registered ",
            "and encourage owners to recognize the importance to the future of the Newfoundland ",
            "Pony to have all eligible ponies Registered and included in the Herdbook. This is an ",
            "important goal of The Newfoundland Pony Society in our efforts to preserve and protect ",
            "the Newfoundland Pony and provides valuable recognition for each individual animal as ",
            "a Newfoundland Pony.\n\n",
          ],
        },
        {
          text: [
            "[IMORTANT NOTE: This Edition of the Herdbook is labelled Preliminary, since we know ",
            "that our current information on the location of a particular pony may not be accurate, ",
            "as pony owners may not have notified the Society of a transfer or sale of a Registered Pony. ",
            "Location listed as UNC means we are uncertain as to the current location of the pony. ",
            "Similarly with the death or gelding of a Registered Pony. If you have information ",
            "as to the location or status of a pony as of December 31, 2021, or inconsistent with the information here, ",
            "please notify the Registrar, Kelly-Power Kean at ",
            {
              text: "registrar@newfoundlandpony.com",
              link: `mailto:registrar@newfoundlandpony.com`,
              style: "link",
            },
            ". After a suitable period to allow for corrections, we will remove the Preliminary designation.]",
            "\n\n",
          ],
        },
        {
          text: [
            "Jack Harris, President    Kelly Power-Kean, Registrar\n\n",
            "The Newfoundland Pony Society 2022",
          ],
          style: "header",
        },
      ],
      pageBreak: "after",
      fontSize: 12,
    },
  ],
};

exports.introductionPage = introductionPage;
