const { onRequest } = require("firebase-functions/v2/https");
const corsAnywhere = require('cors-anywhere');
const cors = require("cors")({ origin: true })
const corsServer = corsAnywhere.createServer({
  originWhitelist: [
    'http://localhost:3000',
    'https://www.traderdash.app',
    'https://traderdash.app',
    'https://traderdash.vercel.app/',
    'https://www.traderdash.vercel.app/',
    'https://qwopapps.vercel.app/',
    'http://admin.qwopcapital.com/'
  ],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
});

exports.proxy = onRequest((request, response) => {
  cors(request, response, () => {
    corsServer.emit('request', request, response);
  })
});
