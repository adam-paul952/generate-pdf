const axios = require("axios");
const cheerio = require("cheerio");

const url = `https://newfoundlandpony.com/lineage/`;

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
