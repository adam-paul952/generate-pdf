const axios = require("axios");
const cheerio = require("cheerio");

/**
 * @file scraper.js
 * @description Uses the web URL to pull in the HTML DOM elements and searches for the class="button" used as View Image
 * @exports fetchAvailableImages
 */

/**
 * @const url
 * @type string
 */

const url = `https://newfoundlandpony.com/lineage/`;

/**
 * @async
 * @function fetchAvailableImages
 * @description axios makes the HTTP request to the webpage and cheerio acts the same as JQuery to traverse the DOM elements.
 * The href from the link is '#popup###' so we use <string>.slice to just return the actual NPS number
 * @returns { Promise.<string[]> } An array of pony NPS numbers who have an image associated with them on the lineage page.
 */

const fetchAvailableImages = async () => {
  return await axios(url)
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      const button = $(".button")
        .map((_, item) => $(item).attr("href"))
        .toArray();
      const currentPhotos = button.map((link) => {
        return link.slice(6, 9);
      });
      return currentPhotos;
    })
    .catch((err) => console.log(err));
};

exports.fetchAvailableImages = fetchAvailableImages;
