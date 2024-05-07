var http = require('http')
var httpProxy = require('http-proxy');

httpProxy.createServer({
  target: 'wss://dev-nakama.winterpixel.io/',
  ws: true
}).listen(3000);

// const https = require("https")
// let express = require('express');
// let app = express();
// app.all("/*", (req, res) => {
//   //const pathSegments = req.path.split('/');
//  // const rocketPath = pathSegments[2]
//   let options = {
//       host: 'dev-nakama.winterpixel.io',
//       path: '/'+req.path,
//       method: req.method
//     };
//   https.request(options, (resp) => {
//     res.contentType((resp.headers["content-type"]?resp.headers["content-type"]:"text/plain"))
//     resp.pipe(res)
//   }).end()
// })


// app.listen(3000)

// // let options = {ws:true}
// // var proxy = httpProxy.createProxyServer(options); // See (†)

// // http.createServer(function(req, res) {
// //   proxy.web(req, res, { target: 'https://dev-nakama.winterpixel.io' });
// // }).listen(80)
