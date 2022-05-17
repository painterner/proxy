var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({
    target:'https://cms.dev.cynfusion.net',
    toProxy: 'http://localhost:8888',
    // changeOrigin: true
    
}).listen(4400);