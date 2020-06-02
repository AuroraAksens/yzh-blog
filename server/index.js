const express = require('./node_modules/express')
// const history = require('connect-history-api-fallback');

const app = express()

// app.use(history());


// https重定向
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));


//ssl证书
const https = require('https');
const fs = require('fs');

//跨域
app.use(require('./node_modules/cors')())

//json
app.use(express.json())


//静态资源托管
app.use('/upload', express.static(__dirname + '/upload'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))


require('./router/index')(app)
require('./router/webApi')(app)
require('./plugins/db')(app)


//挂载ssl秘钥
const options = {
    cert:fs.readFileSync('3607773_www.yaozehui.com.pem'),
    key:fs.readFileSync('3607773_www.yaozehui.com.key')
}

app.listen(4000,()=>{
    console.log('4000后端已开启');
})


//创建443端口，放行https
https.createServer(options,app).listen(443)
