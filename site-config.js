const path = require('path');

module.exports = {
  siteTitle: `1000 Voices for Andrew Yang`,
  siteTitleShort: `1000 Voices`,
  siteDescription: `The power of $1000 a month, in the hands of everyday Americans.`,
  siteUrl: `https://1000voices.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `1000VoicesForAndrewYang`,
    fbAppId: `966242223397117`,
  },
};
