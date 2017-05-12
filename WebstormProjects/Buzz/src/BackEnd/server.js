'use strict'

//const data=require('./config/dataSource');
const bodyParser = require('body-parser');
const express = require('express');
const webpack = require('webpack');
const multer = require('multer')
const webconfig = require('../../webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
let expressJWT = require('express-jwt');
let JWT = require('jsonwebtoken');
let route = require('./routers/route');

const app = express();
app.use('/files',express.static('files'));
const compiler = webpack(webconfig);
app.use(webpackMiddleware(compiler,{
    hot:true,
    publicPath:'/',
    stats:{
        color:true,
    },
    historyApiFallback:true
}))

require('./config/dataSource');

route(app);

app.listen(3000,()=>{
    console.log("Server is up and running at port 3000");
})
