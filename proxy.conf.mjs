// {
//     "/api": {
//       "target": "localhost:5000/api/",
//       "secure": false,
//       "pathRewrite": {
//         "^/api": ""
//       },
//       "changeOrigin": true
//     },
//     "logLevel": "debug"
//   }
export default [
  {
    context: [
        '/my',
        '/many',
        '/endpoints',
        '/i',
        '/need',
        '/to',
        '/proxy'
    ],
    target: 'http://localhost:5000/api/',
    secure: false
  },
  // '/api/proxy': {
  //   "target": 'http://localhost:3000',
  //   "secure": false,
  //   "bypass": function (req, res, proxyOptions) {
  //       if (req.headers.accept.includes('html')) {
  //           console.log('Skipping proxy for browser request.');
  //           return '/index.html';
  //       }
  //       req.headers['X-Custom-Header'] = 'yes';
  //   }
  // }
];