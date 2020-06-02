module.exports={
    devServer:{
        port: '2333',
        host: 'localhost',
        open: true,
    },
        outputDir:__dirname + '/../server/admin',
        publicPath: process.env.NODE_ENV === 'production'
          ? '/admin/'
          : '/',
}