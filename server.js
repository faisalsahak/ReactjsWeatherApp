var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var app = express();

const port = process.env.PORT || 3000

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else {
    res.redirect('http://' + req.hostname + req.url)
  }
});

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  })
  .listen(port, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at ', port);
  });
