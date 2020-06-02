module.exports = app =>{
    const router = require('../node_modules/express').Router()
    const Catearticle = require('../models/Catearticle')
    const Article = require('../models/Article')
    const Swiper = require('../models/Swiper')

    //首页
    router.get('/index/list' , async (req,res)=>{
        const cats = await Catearticle.aggregate([  
            { $lookup:{
                from: 'articles', 
                localField: '_id', 
                foreignField: 'cateArticle', 
                as: 'indexList' 
            }},
            { $sort: { _id:-1 }}
        ]).limit(8)
        res.send(cats)
    })

    //首页swiper
    router.get('/index/swiper', async (req,res)=>{
        const swiper = await Swiper.find().limit(4)
        res.send(swiper)
    })

    //首页最近文章
    router.get('/index/zuijin', async (req,res)=>{
        const zuijin = await Article.find().sort({_id:-1}).limit(8)
        res.send(zuijin)
    })



    // 文摘
    router.get('/wenzhai/list' , async (req,res)=>{
        const cats = await Catearticle.aggregate([  
            {$match:{ title: '文摘'}},
            {$lookup:{
                from: 'articles', 
                localField: '_id', 
                foreignField: 'cateArticle', 
                as: 'indexList'
            }},
            { $sort: { _id:-1 }}
        ])
        res.send(cats)
    })


    //Study
    router.get('/study/list' , async (req,res)=>{
        const cats = await Catearticle.aggregate([
            {$match:{ title: 'Study'}},
            {$lookup:{
                from: 'articles', 
                localField: '_id', 
                foreignField: 'cateArticle', 
                as: 'indexList'
            }},
            { $sort: { _id:-1 }}
        ])
        res.send(cats)
    })


     //程序生涯
     router.get('/chenxu/list' , async (req,res)=>{
        const cats = await Catearticle.aggregate([
            {$match:{ title: '程序生涯'}},
            {$lookup:{
                from: 'articles', 
                localField: '_id', 
                foreignField: 'cateArticle', 
                as: 'indexList'
            }},
            { $sort: { _id:-1 }}
        ])
        res.send(cats)
    })


    //开发工具栏
    router.get('/kaifa/list' , async (req,res)=>{
        const cats = await Catearticle.aggregate([
            {$match:{ title: '开发工具栏'}},
            {$lookup:{
                from: 'articles', 
                localField: '_id', 
                foreignField: 'cateArticle', 
                as: 'indexList'
            }},
            { $sort: { _id:-1 }}
        ])
        res.send(cats)
    })



    //文章详情
    router.get('/xiangqing/:id', async (req,res)=>{
        const data = await Article.findById(req.params.id)
        res.send(data)
    })
    

    app.use('/web/api',router)
}